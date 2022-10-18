const sizes = {
  spacing: {
    auto: 'auto',
    xxs: 6,
    xs: 8,
    sm: 16,
    md: 32,
    lg: 64,
  },
  sizing: {
    auto: 'auto',
    none: 'none',
    full: '100%',
    xxs: 256,
    xs: 320,
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    xxl: 640,
    xxxl: 768,
    xxxxl: 896,
    xxxxxl: 1024,
    xxxxxxl: 1152,
    xxxxxxxl: 1280,
    xxxxxxxxl: 1440,
  },
  glow: {
    spacingX: '2rem',
    spacingY: '4rem',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 30,
    xxxxl: 36,
    xxxxxl: 48,
    xxxxxxl: 64,
  },
  lineHeight: {
    xs: 1,
    sm: 1.25,
    md: 1.375,
    lg: 1.5,
    xl: 1.625,
    xxl: 2,
  },
};

export const spacingSizes = {
  none: 0,
  xxs: sizes.spacing.xxs,
  xs: sizes.spacing.xs,
  sm: sizes.spacing.sm,
  md: sizes.spacing.md,
  lg: sizes.spacing.lg,
};

export const borders = {
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
export const borderSize = {
  base: 2,
};

export const widthAndHeightSize = {
  auto: sizes.sizing.auto,
  none: sizes.sizing.none,
  full: sizes.sizing.full,
  xxs: sizes.sizing.xxs,
  xs: sizes.sizing.xs,
  sm: sizes.sizing.sm,
  md: sizes.sizing.md,
  lg: sizes.sizing.lg,
  xl: sizes.sizing.xl,
  xxl: sizes.sizing.xxl,
  xxxl: sizes.sizing.xxxl,
  xxxxl: sizes.sizing.xxxxl,
  xxxxxl: sizes.sizing.xxxxxl,
  xxxxxxl: sizes.sizing.xxxxxxl,
  xxxxxxxl: sizes.sizing.xxxxxxxl,
  xxxxxxxxl: sizes.sizing.xxxxxxxxl,
};

export const textSizes = sizes.fontSize;

export const lineHeights = sizes.lineHeight;

export const headingSizes = {
  xxl: sizes.sizing.xxl,
  xl: 46,
  lg: sizes.sizing.lg,
  md: sizes.sizing.md,
  sm: sizes.sizing.sm,
  xs: sizes.sizing.xs,
};
