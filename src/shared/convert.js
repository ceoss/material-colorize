// @flow

import {colorArray, formats} from './colors';
import tinycolor from 'tinycolor2';
import type {TinyColor} from 'tinycolor2';
import type {ColorMatchType} from "./colors";

function diffColors(from: string, to: string): number {
  const materialRgb = tinycolor(from).toRgb();
  const colorRgb = tinycolor(to).toRgb();
  const diffColor = (key) => Math.abs(materialRgb[key] - colorRgb[key]);
  return diffColor('r') + diffColor('g') + diffColor('b');
}

export function convert(color: string): ColorMatchType {
  const colorMatch = colorArray.reduce((match: {diffVal: number, color: ColorMatchType}, colorItem: ColorMatchType) => {
    const diffVal = diffColors(color, colorItem.value);
    if (diffVal < match.diffVal) {
      return {diffVal, color: colorItem}
    } else {
      return match;
    }
  }, {diffVal: Infinity, color: ({}: any)});
  return colorMatch.color;
}

// TODO: Both of these functions should share some logic of some kind like a lookup table for the allowed formats
export function getFormatString(color: TinyColor, format: $Values<formats>): string {
  switch (format) {
    case 'hex':
      return color['toHexString']();
    case 'rgb':
      return color['toRgbString']();
    case 'hsl':
      return color['toHslString']();
    default:
      throw new Error('The format you mentioned was unknown');
  }
}

declare function getFormatValue(color: TinyColor, format: 'hex'): string
declare function getFormatValue(color: TinyColor, format: 'rgb'): {r: number, g: number, b: number}
declare function getFormatValue(color: TinyColor, format: 'hsl'): {h: number, s: number, l: number, a: number}
export function getFormatValue(color: TinyColor, format: $Values<formats>) {
  switch (format) {
    case 'hex':
      return color['toHex']();
    case 'rgb':
      return color['toRgb']();
    case 'hsl':
      return color['toHsl']();
    default:
      throw new Error(`The format you mentioned was unknown. Format: ${format}`);
  }
}
