import { spacing } from './spacing';

const container = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const sizes = {
  ...spacing,
  ...{
    '3xs': 224,
    '2xs': 256,
    'xs': 320,
    'sm': 384,
    'md': 448,
    'lg': 512,
    'xl': 576,
    '2xl': 672,
    '1/2': '50%',
    '1/3': '33.333%',
    '2/3': '66.666%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666%',
    '2/6': '33.333%',
    '3/6': '50%',
    '4/6': '66.666%',
    '5/6': '83.333%',
    'full': '100%',
  },
  container,
};

export type ISizes = keyof typeof sizes;
export default sizes;
