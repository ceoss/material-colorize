import {colorArray} from './colors';
import tinycolor from 'tinycolor2';
import {getImagePallete} from "./image";


getImagePallete();

function diffColors(from, to) {
  const materialRgb = tinycolor(from).toRgb();
  const colorRgb = tinycolor(to).toRgb();
  const diffColor = (key) => Math.abs(materialRgb[key] - colorRgb[key]);
  return diffColor('r') + diffColor('g') + diffColor('b');
}

export function convert(color) {
  const colorMatch = colorArray.reduce((match, colorItem) => {
    const diffVal = diffColors(color, colorItem.value);
    if (diffVal < match.diffVal) {
      return {diffVal, color: colorItem}
    } else {
      return match;
    }
  }, {diffVal: Infinity, color: {}});
  return colorMatch.color;
}

const getFormatMethod = (format) => {
  switch (format) {
    case 'hex':
      return 'toHexString';
    case 'hexOpacity':
      return 'toHex8String';
    case 'rgb':
      return 'toRgbString';
    case 'rgbPercentage':
      return 'toPercentageRgbString';
    default:
      return 'toString'
  }
};

export const getColorFormat = (color, format) => tinycolor(color)[getFormatMethod(format)]();
