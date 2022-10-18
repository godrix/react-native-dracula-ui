import React from 'react';
import { Text as TextRN, TextStyle, TextProps, Platform } from 'react-native';
import colors, { ITextColors } from '../../base/colors';
import typography, {
  IFontSize,
  IFontWeight,
  ILineHeight,
  ITextAligments,
} from '../../base/typography';
import {
  MarginMixin,
  paddingMixin,
  PaddingMixin,
  marginMixin,
} from '../../utils/spacing';

/**
 * Text Props
 */
export type TextDraculaProps = {
  align?: ITextAligments;

  /**
   * Controls the size of the text based on pre-configured Dracula UI sizes.
   */
  size?: IFontSize;

  /**
   * Controls the weight of the text.
   */
  weight?: IFontWeight;

  /**
   * Controls the line height of a text.
   */
  lineHeight?: ILineHeight;

  /**
   * Controls the color of the text
   */
  color?: ITextColors;
} & MarginMixin &
  PaddingMixin &
  TextProps;

/**
 * Text is the base component for any sort of text.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of Text.
 *
 * Use this component for generic, and non-hierarchical text that is
 * to be displayed on a page, or as part of other complex components
 * or UI patterns.
 */

export function Text(props: TextDraculaProps) {
  const { color, ...textProps } = props;

  const finalProps = {
    ...textProps,
    style: [
      paddingMixin(props),

      marginMixin(props),
      {
        color: colors.textColors[color ?? 'white'],
        fontSize: typography.fontSizes[props.size ?? 'sm'],
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
        fontWeight: typography.fontWeights[props.weight ?? 'normal'],
        textAlign: typography.textAligments[props.align ?? 'left'],
      },
      props.lineHeight && {
        lineHeight:
          typography.lineHeights[props.lineHeight] *
          typography.fontSizes[props.size ?? 'sm'],
      },

      textProps.style,
    ] as TextStyle,
  };

  return React.createElement(TextRN, finalProps, textProps.children);
}
