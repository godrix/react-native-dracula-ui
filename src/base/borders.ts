const avatarBorder = {
  normal: 4,
  large: 8,
  none: 0,
};

const borderWidths = {
  none: 0,
  sm: 2,
  base: 4,
  md: 6,
  lg: 8,
  xl: 12,
  xxl: 16,
  xxxl: 24,
  full: 9999,
  avatarBorder,
};

export type IBorderWidth = keyof typeof borderWidths;
export type IAvatarBorderVariants = keyof typeof avatarBorder;

export default borderWidths;
