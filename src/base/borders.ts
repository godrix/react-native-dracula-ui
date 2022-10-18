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
};

export type IBorderWidth = keyof typeof borderWidths;

export default borderWidths;
