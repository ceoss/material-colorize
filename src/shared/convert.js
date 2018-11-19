// @flow

import type {ColorMatchType} from "./colors";
import {colorArray, formats} from './colors';
import type {TinyColor} from 'tinycolor2';
import tinycolor from 'tinycolor2';
import {ObjectMap} from "./generic";

function diffColors(from: string, to: string): number {
  const materialRgb = tinycolor(from).toRgb();
  const colorRgb = tinycolor(to).toRgb();
  const diffColor = (key) => Math.abs(materialRgb[key] - colorRgb[key]);
  return diffColor('r') + diffColor('g') + diffColor('b');
}

export function convert(color: string): ColorMatchType {
  const colorMatch = colorArray.reduce((match: { diffVal: number, color: ColorMatchType }, colorItem: ColorMatchType) => {
    const diffVal = diffColors(color, colorItem.value);
    if (diffVal < match.diffVal) {
      return {
        diffVal,
        color: colorItem
      }
    } else {
      return match;
    }
  }, {
    diffVal: Infinity,
    color: ({}: any)
  });
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

declare function getFormatValue(color: TinyColor, format: 'hex'): { data: $Call<TinyColor.toHex>, formatted: $Call<TinyColor.toHex> }

declare function getFormatValue(color: TinyColor, format: 'rgb'): { data: $Call<TinyColor.toRgb>, formatted: $Call<TinyColor.toRgb>, orderOfKeys: ($Keys<$Call<TinyColor.toRgb>>)[] }

declare function getFormatValue(color: TinyColor, format: 'hsl'): { data: $Call<TinyColor.toHsl>, formatted: $Call<TinyColor.toHsl>, orderOfKeys: ($Keys<$Call<TinyColor.toHsl>>)[] }

export function getFormatValue(color: TinyColor, format: $Values<formats>) {
  switch (format) {
    case 'hex': {
      const data = color.toHex();
      return {
        data,
        formatted: `#${data}`
      };
    }
    case 'rgb': {
      const data = color.toRgb();
      return {
        data,
        formatted: data,
        orderOfKeys: [
          'r',
          'g',
          'b'
        ]
      }
    }
    case 'hsl': {
      const data = color.toHsl();
      return {
        data,
        formatted: ObjectMap(data, (val, key) => key === 'h' ? Math.floor(val) : `${Math.floor(val * 100)}%`),
        orderOfKeys: [
          'h',
          's',
          'l'
        ]
      }
    }
    default:
      throw new Error(`The format you mentioned was unknown. Format: ${format}`);
  }
}
