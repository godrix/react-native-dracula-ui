import React from 'react';
import {
  Text as HeadingRN,
  TextStyle,
  TextProps,
  Platform,
} from 'react-native';
import {
  MarginMixin,
  paddingMixin,
  PaddingMixin,
  marginMixin,
} from '../../utils/spacing';
import colors, { IHeadingColors } from '../../base/colors';
import sizes, { IHeadingSizes } from '../../base/typography';

/**
 * Heading Props
 */
export type HeadingDraculaProps = {
  /**
   * The size and type of Heading to be used.
   * Denotes hierarchy.
   */
  size?: IHeadingSizes;

  /**
   * The Dracula UI color to be applied to the Heading.
   */
  color?: IHeadingColors;
} & TextProps &
  MarginMixin &
  PaddingMixin;
/**
 * Heading is used to display headlines and other forms of hierarchical Text.
 *
 * Headings are similar to the base Text component, but restricted to certain
 * sizes and font weight.
 */

export function Heading(props: HeadingDraculaProps) {
  const { color, ...textProps } = props;

  const finalProps = {
    ...textProps,
    style: [
      paddingMixin(props),

      marginMixin(props),
      {
        color: colors.headingColors[color ?? 'white'],
        fontSize: sizes.headingSizes[props.size ?? 'xl'],
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
        fontWeight: 'bold',
      },
      textProps.style,
    ] as TextStyle,
  };

  return React.createElement(HeadingRN, finalProps, textProps.children);
}
