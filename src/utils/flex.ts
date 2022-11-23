import type { FlexStyle } from 'react-native';

export type FlexMixin = {
  alignItems?: FlexStyle['alignItems'];
  alignContent?: FlexStyle['alignContent'];
  justifyContent?: FlexStyle['justifyContent'];
  flexWrap?: FlexStyle['flexWrap'];
  flexDirection?: FlexStyle['flexDirection'];
  flexDir?: FlexStyle['flexDirection'];
  flex?: FlexStyle['flex'];
  f?: FlexStyle['flex'];
  flexGrow?: FlexStyle['flexGrow'];
  fg?: FlexStyle['flexGrow'];
  flexShrink?: FlexStyle['flexShrink'];
  fs?: FlexStyle['flexShrink'];
  flexBasis?: FlexStyle['flexBasis'];
  fb?: FlexStyle['flexBasis'];
  alignSelf?: FlexStyle['alignSelf'];
  position?: FlexStyle['position'];
  pos?: FlexStyle['position'];
  top?: FlexStyle['top'];
  right?: FlexStyle['right'];
  bottom?: FlexStyle['bottom'];
  left?: FlexStyle['left'];
  zIndex?: FlexStyle['zIndex'];
  z?: FlexStyle['zIndex'];
};

export function flexMixin(mixin: FlexMixin) {
  const flexType = {
    alignItems: 'alignItems',
    alignContent: 'alignContent',
    justifyContent: 'justifyContent',
    flexWrap: 'flexWrap',
    flexDirection: 'flexDirection',
    flexDir: 'flexDirection',
    flex: 'flex',
    f: 'flex',
    flexGrow: 'flexGrow',
    fg: 'flexGrow',
    flexShrink: 'flexShrink',
    fs: 'flexShrink',
    flexBasis: 'flexBasis',
    fb: 'flexBasis',
    alignSelf: 'alignSelf',
    position: 'position',
    pos: 'position',
    zIndex: 'zIndex',
    z: 'zIndex',
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
  };

  const filterProps = Object.entries(mixin).filter((props) =>
    Object.keys(flexType).includes(props[0])
  ) as [keyof FlexMixin, FlexStyle][];

  const styles = filterProps.reduce((previousValue, currentValue) => {
    const [propriety, value] = currentValue;

    return {
      ...previousValue,
      [flexType[propriety]]: value,
    } as FlexStyle;
  }, {});

  return styles;
}
