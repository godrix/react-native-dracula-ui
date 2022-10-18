const base = {
  black: 'hsl(230, 15%, 15%)',
  blackSecondary: 'hsl(230, 15%, 30%)',
  blackTernary: 'hsl(230, 15%, 70%)',
  blackLight: 'hsl(230, 15%, 15%, 0.5)',

  grey: 'hsl(230, 15%, 30%)',
  greySecondary: 'hsl(230, 15%, 45%)',
  greyTernary: 'hsl(230, 15%, 75%)',
  greyLight: 'hsl(230, 15%, 30%, 0.5)',

  white: 'hsl(60, 30%, 96%)',
  whiteSecondary: 'hsl(60, 30%, 100%)',
  whiteLight: 'hsl(60, 30%, 96%, 0.5)',

  cyan: 'hsl(170, 100%, 75%)',
  cyanSecondary: 'hsl(170, 100%, 90%)',
  cyanLight: 'hsl(170, 100%, 75%, 0.5)',

  green: 'hsl(115, 100%, 75%)',
  greenSecondary: 'hsl(115, 100%, 90%)',
  greenLight: 'hsl(115, 100%, 75%, 0.5)',

  orange: 'hsl(35, 100%, 75%)',
  orangeSecondary: 'hsl(35, 100%, 90%)',
  orangeLight: 'hsl(35, 100%, 75%, 0.5)',

  pink: 'hsl(330, 100%, 75%)',
  pinkSecondary: 'hsl(330, 100%, 90%)',
  pinkLight: 'hsl(330, 100%, 75%, 0.5)',

  purple: 'hsl(250, 100%, 75%)',
  purpleSecondary: 'hsl(250, 100%, 90%)',
  purpleLight: 'hsl(250, 100%, 75%, 0.5)',

  red: 'hsl(10, 100%, 75%)',
  redSecondary: 'hsl(10, 100%, 90%)',
  redLight: 'hsl(10, 100%, 75%, 0.5)',

  yellow: 'hsl(60, 100%, 75%)',
  yellowSecondary: 'hsl(60, 100%, 90%)',
  yellowLight: 'hsl(60, 100%, 75%, 0.5)',

  cyanTransparent: 'hsl(170, 100%, 75%, 0.1)',
  greenTransparent: 'hsl(115, 100%, 75%, 0.1)',
  orangeRransparent: 'hsl(35, 100%, 75%, 0.1)',
  pinkRransparent: 'hsl(330, 100%, 75%, 0.1)',
  purpleRransparent: 'hsl(250, 100%, 75%, 0.1)',
  redRransparent: 'hsl(10, 100%, 75%, 0.1)',
  yellowRransparent: 'hsl(60, 100%, 75%, 0.1)',

  disabled: 'hsl(230, 15%, 50%)',

  glowColor: 'rgba(255, 255, 255, 0.25)',
};

const supportColors = {
  white: base.white,
  black: base.black,
  blackSecondary: base.blackSecondary,
  blackLight: base.blackLight,
  grey: base.grey,
  greySecondary: base.greenSecondary,
  greyLight: base.greenLight,
};

const baseColors = {
  cyan: base.cyan,
  green: base.green,
  orange: base.orange,
  pink: base.pink,
  purple: base.purple,
  red: base.red,
  yellow: base.yellow,
};

const gradientColors = {
  purpleCyan: [base.purple, base.cyan],
  yellowPink: [base.yellow, base.pink],
  cyanGreen: [base.cyan, base.green],
  pinkPurple: [base.pink, base.purple],
};

const backgroundColors = {
  cyan: base.cyan,
  green: base.green,
  orange: base.orange,
  pink: base.pink,
  purple: base.purple,
  red: base.red,
  yellow: base.yellow,
  white: base.white,
  black: base.black,
  blackSecondary: base.blackSecondary,
  blackLight: base.blackLight,
};

//const glowColors = base.glowColor;

const borderColors = {
  cyan: base.cyan,
  green: base.green,
  orange: base.orange,
  pink: base.pink,
  purple: base.purple,
  red: base.red,
  yellow: base.yellow,
};

const scrollbarColors = {
  ...backgroundColors,
};

const textColors = {
  cyan: base.cyan,
  green: base.green,
  orange: base.orange,
  pink: base.pink,
  purple: base.purple,
  red: base.red,
  yellow: base.yellow,
  white: base.white,
  black: base.black,
  blackSecondary: base.blackSecondary,
  blackLight: base.blackLight,
};

const headingColors = {
  cyan: base.cyan,
  green: base.green,
  orange: base.orange,
  pink: base.pink,
  purple: base.purple,
  red: base.red,
  yellow: base.yellow,
  white: base.white,
  black: base.black,
  blackSecondary: base.blackSecondary,
  blackLight: base.blackLight,
};

export const colorUtilities = {
  base: Object.keys(baseColors),
  text: Object.keys(textColors),
  support: Object.keys(supportColors),
  gradient: Object.keys(gradientColors),
  border: Object.keys(borderColors),
};

const colors = {
  supportColors,
  gradientColors,
  backgroundColors,
  borderColors,
  scrollbarColors,
  textColors,
  headingColors,
};

export type ISupportColors = typeof colors.supportColors;
export type IGradientColors = keyof typeof colors.gradientColors;
export type IBackgroundColors = keyof typeof colors.backgroundColors;
export type IBorderColors = keyof typeof colors.borderColors;
export type ITextColors = keyof typeof colors.textColors;
export type IHeadingColors = keyof typeof colors.headingColors;

export default colors;
