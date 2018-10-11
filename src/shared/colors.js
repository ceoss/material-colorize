import * as colorItems from '@material-ui/core/colors';
export const black = '#000000';

export const white = '#FFFFFF';

export const mainColorNumber = '500';

export type ColorType = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export type ColorKeysType = $Keys<ColorType>;

const nonCommonColor: string = colorItems[Object.keys(colorItems).find(key => key !== 'common')];
type NonCommonColorKeysType = $Keys<typeof nonCommonColor>;
const keepPrevAndAddArr = <P = {}, T, I>(prev: P, key: $Keys<I>, val: T): prev & {|[key: $Keys<I>]: T|} => ({
  ...prev,
  [key]: [
    ...prev[key],
    val
  ]
});

export const {accentColorNumbers, primaryColorNumbers} = Object.keys(nonCommonColor).reduce((prev: {
    accentColorNumbers: NonCommonColorKeysType[],
    primaryColorNumbers: NonCommonColorKeysType[]
  }, key: string) =>
    key.startsWith('A') ?
      keepPrevAndAddArr<typeof prev, NonCommonColorKeysType, ColorType>(prev, 'accentColorNumbers', key) :
      keepPrevAndAddArr<typeof prev, NonCommonColorKeysType, ColorType>(prev, 'primaryColorNumbers', key),
  {
    accentColorNumbers: [],
    primaryColorNumbers: []
  });

export const colorNumbers: ColorKeysType[] = [
  ...primaryColorNumbers,
  ...accentColorNumbers
];

export const colors: {[colorName: string]: ColorType} = Object.keys(colorItems)
  .reduce((prev, key) => key === 'common' ? prev : {
    ...prev,
    [key]: colorItems[key]
  }, {});
export const colorNames: ($Keys<typeof colors>)[] = Object.keys(colors);

export const colorArray: {
  color: string,
  number: ColorKeysType,
  value: ColorType[ColorKeysType]
} = [
  ...Object.keys(colors).map(colorName =>
    Object.keys(colors[colorName]).map(number =>
      ({
        color: colorName,
        number: number,
        value: colors[colorName][number]
      })
    )),
  {
    color: 'black',
    number: mainColorNumber,
    value: black
  },
  {
    color: 'white',
    number: mainColorNumber,
    value: white
  }
];
