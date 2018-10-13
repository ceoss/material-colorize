// @flow

import {colorArray} from './colors';
import tinycolor from 'tinycolor2';
import type {ColorArrayType} from "./colors";

function diffColors(from: string, to: string): number {
  const materialRgb = tinycolor(from).toRgb();
  const colorRgb = tinycolor(to).toRgb();
  const diffColor = (key) => Math.abs(materialRgb[key] - colorRgb[key]);
  return diffColor('r') + diffColor('g') + diffColor('b');
}

export function convert(color: string): ColorArrayType {
  const colorMatch = colorArray.reduce((match: {diffVal: number, color: ColorArrayType}, colorItem: ColorArrayType) => {
    const diffVal = diffColors(color, colorItem.value);
    if (diffVal < match.diffVal) {
      return {diffVal, color: colorItem}
    } else {
      return match;
    }
  }, {diffVal: Infinity, color: ({}: any)});
  return colorMatch.color;
}

const getFormatMethod = (format: string): string => {
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

export const getColorFormat = (color: string, format: string) => tinycolor(color)[getFormatMethod(format)]();
