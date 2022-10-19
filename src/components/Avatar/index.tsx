import React from 'react';
import {
  ViewProps,
  Image,
  ImageProps,
  ImageStyle,
  ImageSourcePropType,
  StyleProp,
  TextProps,
} from 'react-native';
import colors, { IBackgroundColors } from '../../base/colors';
import { Heading } from '../Heading';
import { Box } from '../Box';
import borders, { IAvatarBorderVariants } from '../../base/borders';
import {
  MarginMixin,
  paddingMixin,
  PaddingMixin,
  marginMixin,
} from '../../utils/spacing';
//import * as S from './styles';

export type AvatarProps = {
  /**
   * The title or name to be used in the avatar.
   */
  title: string;

  /**
   * The theme color for the avatar.
   * This property controls the border and glow colors for the component.
   */
  color?: IBackgroundColors;

  /**
   * The variant property allows for consumers to choose from
   * a regular avatar, or a subtle variation.
   */
  //variant?: keyof typeof AvatarVariants;

  /**
   * Allows for controlling the border of the avatar.
   * `large` -> to use a thicker border.
   * `none` -> hides the border.
   */
  borderVariant?: IAvatarBorderVariants;

  /**
   * Sets the source for the profile picture.
   */
  src?: ImageSourcePropType;
} & MarginMixin &
  PaddingMixin;

type ImageAvatarProps = ImageProps & AvatarProps;
type ViewAvatarProps = ViewProps & AvatarProps;

/**
 * The Avatar component is used to represent a user.
 *
 * It displays a profile picture, or falls back to the user's initials
 * if a profile pic is not provided.
 */
export function Avatar(props: ImageAvatarProps | ViewAvatarProps) {
  const { color, src, title, borderVariant, ...imageProps } = props;
  function firstAndlastletter() {
    const name = title.split(' ');

    const first = name[0]?.charAt(0) ?? '';
    const last = name[1]?.charAt(0) ?? title?.slice(-1) ?? '';
    return first + last;
  }

  const finalProps = {
    ...imageProps,
    style: [
      paddingMixin(props),

      marginMixin(props),

      src && {
        width: 150,
        height: 150,
        borderColor: colors.backgroundColors[color ?? 'green'],
        borderWidth: borders.avatarBorder[borderVariant ?? 'normal'],
        borderRadius: 75,
      },
      !src && {
        width: 150,
        height: 150,
        borderColor: colors.backgroundColors[color ?? 'green'],
        borderWidth: borders.avatarBorder[borderVariant ?? 'normal'],
        borderRadius: 75,
        backgroundColor: colors.backgroundColors[color ?? 'green'],
        alignItems: 'center',
        justifyContent: 'center',
      },

      // props.rounded && { borderRadius: borders[props.rounded] },
      borderVariant && {
        borderWidth: borders.avatarBorder[borderVariant ?? 'normal'],
      },

      // props.height && { height: sizes[props.height] },
      // props.width && { width: sizes[props.width] },

      imageProps.style,
    ] as ImageStyle,
  };

  const textAvatarStyle = {
    textTransform: 'uppercase',
  } as StyleProp<TextProps>;

  if (src) {
    return (
      <Image
        {...finalProps}
        source={src}
        accessibilityLabel={title}
        resizeMode={'cover'} // <- needs to be "cover" for borderRadius to take effect on Android
      />
    );
  }
  return (
    <Box {...finalProps}>
      <Heading size="xl" style={textAvatarStyle}>
        {firstAndlastletter()}
      </Heading>
    </Box>
  );
}
