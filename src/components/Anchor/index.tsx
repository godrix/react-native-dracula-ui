import React from 'react';
import {
  Pressable,
  TextProps,
  Linking,
  TextStyle,
  Platform,
} from 'react-native';
import { Text } from '../Text';
import {
  MarginMixin,
  paddingMixin,
  PaddingMixin,
  marginMixin,
} from '../../utils/spacing';
import typography, { IFontSize, IFontWeight } from '../../base/typography';
import colors, { ITextColors } from '../../base/colors';

/** Anchor Props */
export type AnchorProps = {
  /**
   * The path to link this anchor to.
   */
  href: string;

  /**
   * Controls the size of the link based on pre-configured Dracula UI sizes.
   */
  size?: IFontSize;

  /**
   * Controls the weight of the link.
   */
  weight?: IFontWeight;

  /**
   * Controls the color of the link
   */
  color?: ITextColors;

  /**
   * Controls the color of the link on hover
   */
  //hoverColor?: keyof typeof hoverColors;
} & MarginMixin &
  PaddingMixin &
  TextProps;
/**
 * The anchor is an abstraction/style that can/is applied to elements that need external link.
 *
 * Consumers of this component can control, the color, size,
 * weight, and spacing of the Anchor.
 *
 * Use this component to create text or element based anchors around other HTML tags or React Components.
 */

export function Anchor(props: AnchorProps) {
  const { href, children, ...textProps } = props;

  const handlePress = () => {
    Linking.openURL(href);
  };

  const finalProps = {
    ...textProps,
    style: [
      paddingMixin(props),

      marginMixin(props),
      {
        color: colors.textColors[props.color ?? 'purple'],
        fontSize: typography.fontSizes[props.size ?? 'sm'],
        fontFamily: Platform.OS === 'ios' ? 'Menlo-Regular' : 'monospace',
        fontWeight: typography.fontWeights[props.weight ?? 'normal'],
      },

      textProps.style,
    ] as TextStyle,
  };

  return (
    <Pressable onPress={handlePress}>
      <Text {...finalProps}>{children}</Text>
    </Pressable>
  );
}
