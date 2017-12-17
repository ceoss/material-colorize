import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} from 'material-ui/colors';

export const black = '#000000';

export const white = '#FFFFFF';

export const mainColorNumber = '500';

export const primaryColorNumbers = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '600',
  '700',
  '800',
  '900'
];

export const accentColorNumbers = [
  'A100',
  'A200',
  'A400',
  'A700'
];

export const colorNumbers = [].concat([mainColorNumber], primaryColorNumbers, accentColorNumbers);

export const colors = {
  amber: amber,
  blue: blue,
  blueGrey: blueGrey,
  brown: brown,
  cyan: cyan,
  deepOrange: deepOrange,
  deepPurple: deepPurple,
  green: green,
  grey: grey,
  indigo: indigo,
  lightBlue: lightBlue,
  lightGreen: lightGreen,
  lime: lime,
  orange: orange,
  pink: pink,
  purple: purple,
  red: red,
  teal: teal,
  yellow: yellow
};

export const colorNames = Object.keys(colors);
