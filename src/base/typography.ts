import { normalize } from '../utils/normalize';

const typography = {
  lineHeights: {
    xs: normalize(1),
    sm: normalize(1.25),
    md: normalize(1.375),
    lg: normalize(1.5),
    xl: normalize(1.625),
    xxl: normalize(2),
  },
  fontConfig: {},
  fontWeights: {
    normal: 'normal',
    semibold: '500',
    bold: 'bold',
  },
  fonts: {},
  fontSizes: {
    '2xs': normalize(10),
    'xs': normalize(12),
    'sm': normalize(14),
    'md': normalize(16),
    'lg': normalize(18),
    'xl': normalize(20),
    '2xl': normalize(24),
    '3xl': normalize(30),
    '4xl': normalize(36),
    '5xl': normalize(48),
    '6xl': normalize(60),
    '7xl': normalize(72),
    '8xl': normalize(96),
    '9xl': normalize(128),
  },
  textAligments: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },
  headingSizes: {
    '2xs': normalize(16),
    'xs': normalize(18),
    'sm': normalize(21),
    'md': normalize(24),
    'lg': normalize(26),
    'xl': normalize(32),
  },
};

export type ITypography = typeof typography;
export type IFontSize = keyof typeof typography.fontSizes;
export type ILineHeight = keyof typeof typography.lineHeights;
export type IFontWeight = keyof typeof typography.fontWeights;
export type ITextAligments = keyof typeof typography.textAligments;
export type IHeadingSizes = keyof typeof typography.headingSizes;

export default typography;
