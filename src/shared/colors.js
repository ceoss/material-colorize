// @flow

import * as colorItems from '@material-ui/core/colors';

export type ColorType = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export type ColorKeysType = $Keys<ColorType>;

export const black = '#000000';

export const white = '#FFFFFF';

export const mainColorNumber: ColorKeysType = '500';

const nonCommonColorName: string = (Object.keys(colorItems).find(key => key !== 'common'): any);
const nonCommonColor: ColorType = colorItems[nonCommonColorName];
type NonCommonColorKeysType = $Keys<typeof nonCommonColor>;
const keepPrevAndAddArr = <P: Object, T, I: Object>(prev: P, key: $Keys<I>, val: T): P & {|[key: $Keys<I>]: T|} => ({
  ...prev,
  [key]: [
    ...prev[key],
    val
  ]
});

export const {accentColorNumbers, primaryColorNumbers} = Object.keys(nonCommonColor).reduce((prev: {
    accentColorNumbers: NonCommonColorKeysType[],
    primaryColorNumbers: NonCommonColorKeysType[]
  }, key: $Keys<ColorType>) =>
    (key: string).startsWith('A') ?
      keepPrevAndAddArr<typeof prev, NonCommonColorKeysType, typeof prev>(prev, 'accentColorNumbers', key) :
      keepPrevAndAddArr<typeof prev, NonCommonColorKeysType, typeof prev>(prev, 'primaryColorNumbers', key),
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

export type ColorArrayType = {
  color: string,
  number: ColorKeysType,
  value: string
};

export const colorArray: ColorArrayType[] = [
  ...Object.keys(colors).reduce((prev: ColorArrayType[], colorName: string): ColorArrayType[] =>
    [
      ...prev,
      ...Object.keys(colors[colorName]).map((number: ColorKeysType): ColorArrayType => ({
        color: colorName,
        number: number,
        value: (colors[colorName][number]: string)
      })
    )
  ], []),
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
