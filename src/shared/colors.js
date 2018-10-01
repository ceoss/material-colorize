import * as colorItems from '@material-ui/core/colors';

export const black = '#000000';

export const white = '#FFFFFF';

export const mainColorNumber = '500';

const nonCommonColorName = Object.keys(colorItems).find(key => key !== 'common');
const keepPrevAndAddArr = (prev, key, val) => ({
  ...prev,
  [key]: [
    ...prev[key],
    val
  ]
});

export const {accentColorNumbers, primaryColorNumbers} = Object.keys(colorItems[nonCommonColorName]).reduce((prev, key) =>
    key.startsWith('A') ?
      keepPrevAndAddArr(prev, 'accentColorNumbers', key) :
      keepPrevAndAddArr(prev, 'primaryColorNumbers', key),
  {
    accentColorNumbers: [],
    primaryColorNumbers: []
  });

export const colorNumbers = [
  ...primaryColorNumbers,
  ...accentColorNumbers
];

export const colors = Object.keys(colorItems)
  .reduce((prev, key) => key === 'common' ? prev : {
    ...prev,
    [key]: colorItems[key]
  }, {});
export const colorNames = Object.keys(colors);
