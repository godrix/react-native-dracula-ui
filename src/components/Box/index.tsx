import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import colors, { IBackgroundColors, IBorderColors } from '../../base/colors';
import {
  MarginMixin,
  paddingMixin,
  PaddingMixin,
  marginMixin,
} from '../../utils/spacing';
import { flexMixin, FlexMixin } from '../../utils/flex';
import sizes, { ISizes } from '../../base/sizes';
import borders, { IBorderWidth } from '../../base/borders';

/**
 * Box Props
 */
export type BoxProps = {
  /** The background color. */
  color?: IBackgroundColors;

  /** The border radius. */
  rounded?: IBorderWidth;

  //height?: keyof typeof heights;
  height?: ISizes;

  //width?: keyof typeof widths;
  width?: ISizes;

  /** The glow color. */
  //glowColor?: keyof typeof glowColors;

  /** The border color. */
  borderColor?: IBorderColors;

  /** If the custom scrollbar is to be used and its color. */
  // scrollbar?: keyof typeof scrollbarColors | boolean;
} & MarginMixin &
  PaddingMixin &
  FlexMixin &
  ViewProps;

/**
 * Box is the most primitive component of Dracula UI.
 * Using Box allows for consumers of the components library to compose
 * more complex patterns, components, and UIs.
 *
 * Box includes built-in Color and Spacing properties that make building
 * complex components convenient and consistent.
 */

export function Box(props: BoxProps) {
  const { color, ...viewProps } = props;

  const finalProps = {
    ...viewProps,
    style: [
      paddingMixin(props),

      marginMixin(props),

      flexMixin(props),

      color && { backgroundColor: colors.backgroundColors[color] },

      props.rounded && { borderRadius: borders[props.rounded] },
      props.borderColor && {
        borderColor: colors.borderColors[props.borderColor],

        borderWidth: borders.base,
      },

      props.height && { height: sizes[props.height] },
      props.width && { width: sizes[props.width] },

      viewProps.style,
    ] as ViewStyle,
  };

  return React.createElement(View, finalProps, viewProps.children);
}
