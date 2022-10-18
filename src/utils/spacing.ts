import { ISpacing, spacing } from '../base/spacing';

export type MarginMixin = {
  m?: ISpacing;
  mx?: ISpacing;
  my?: ISpacing;
  mt?: ISpacing;
  mb?: ISpacing;
  ml?: ISpacing;
  mr?: ISpacing;
  ms?: ISpacing;
  me?: ISpacing;
};
export type PaddingMixin = {
  p?: ISpacing;
  px?: ISpacing;
  py?: ISpacing;
  pt?: ISpacing;
  pb?: ISpacing;
  pl?: ISpacing;
  pr?: ISpacing;
  ps?: ISpacing;
  pe?: ISpacing;
};

type MarginPaddingMixin = string | number | undefined;

type paddingStyle = {
  padding?: MarginPaddingMixin;
  paddingBottom?: MarginPaddingMixin;
  paddingEnd?: MarginPaddingMixin;
  paddingHorizontal?: MarginPaddingMixin;
  paddingLeft?: MarginPaddingMixin;
  paddingRight?: MarginPaddingMixin;
  paddingStart?: MarginPaddingMixin;
  paddingTop?: MarginPaddingMixin;
  paddingVertical?: MarginPaddingMixin;
};

type marginStyle = {
  margin?: MarginPaddingMixin;
  marginBottom?: MarginPaddingMixin;
  marginEnd?: MarginPaddingMixin;
  marginHorizontal?: MarginPaddingMixin;
  marginLeft?: MarginPaddingMixin;
  marginRight?: MarginPaddingMixin;
  marginStart?: MarginPaddingMixin;
  marginTop?: MarginPaddingMixin;
  marginVertical?: MarginPaddingMixin;
};

export function paddingMixin(mixin: PaddingMixin) {
  const paddingType = {
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    pt: 'paddingTop',
    pb: 'paddingBottom',
    pr: 'paddingRight',
    pl: 'paddingLeft',
    ps: 'paddingStart',
    pe: 'paddingEnd',
  };
  const filterProps = Object.entries(mixin).filter((props) =>
    Object.keys(paddingType).includes(props[0])
  ) as [keyof PaddingMixin, ISpacing][];
  const styles = filterProps.reduce((previousValue, currentValue) => {
    const [propriety, value] = currentValue;

    return {
      ...previousValue,
      [paddingType[propriety]]: spacing[value],
    } as paddingStyle;
  }, {});

  return styles;
}

export function marginMixin(mixin: MarginMixin) {
  const marginType = {
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    mt: 'marginTop',
    mb: 'marginBottom',
    mr: 'marginRight',
    ml: 'marginLeft',
    ms: 'marginStart',
    me: 'marginEnd',
  };

  const filterProps = Object.entries(mixin).filter((props) =>
    Object.keys(marginType).includes(props[0])
  ) as [keyof MarginMixin, ISpacing][];

  const styles = filterProps.reduce((previousValue, currentValue) => {
    const [propriety, value] = currentValue;

    return {
      ...previousValue,
      [marginType[propriety]]: spacing[value],
    } as marginStyle;
  }, {});

  return styles;
}
