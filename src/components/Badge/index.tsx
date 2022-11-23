import React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import {
  MarginMixin,
  paddingMixin,
  PaddingMixin,
  marginMixin,
} from '../../utils/spacing';
import { Text } from '../Text';
import colors, { IBackgroundColors } from '../../base/colors';
import badgeStyle from '../../styles/badge';
/**
 * Badge Props
 */
export type BadgeProps = {
  /**
   * The theme variation color for a badge.
   */
  color?: IBackgroundColors;

  /**
   * The variants for the Badge components.
   * `normal` -> Default solid badge.
   * `subtle` -> Subtler background, highlights the text.
   * `outline` -> No background color, just borders and text.
   */
  variant?: 'normal' | 'subtle' | 'outline';
} & ViewProps &
  PaddingMixin &
  MarginMixin;

/**
 * Badges are used to denote status or to highlight specific
 * information.
 */
export function Badge(props: BadgeProps) {
  const { color, variant, ...viewProps } = props;

  const isOutline = variant === 'outline';
  const isSubtle = variant === 'subtle';
  const overrideTextColor = isOutline || isSubtle;

  const finalProps = {
    ...viewProps,
    overrideTextColor,
    style: [
      paddingMixin(props),

      marginMixin(props),

      badgeStyle.container,

      // color && { backgroundColor: colors.backgroundColors[color] },

      // props.rounded && { borderRadius: borders[props.rounded] },
      {
        borderRadius: 5,

        borderColor: colors.backgroundColors[color || 'purple'],

        borderWidth: 2,
      },

      // props.height && { height: sizes[props.height] },
      // props.width && { width: sizes[props.width] },

      viewProps.style,
    ] as ViewStyle,
  };
  return (
    <View {...finalProps}>
      <Text>{props.children}</Text>
    </View>
  );
}
