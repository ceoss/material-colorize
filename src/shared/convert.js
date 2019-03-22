// @flow

import type {ColorMatchType} from "./colors";
import {colorArray, formats} from './colors';
import type {TinyColor} from 'tinycolor2';
import {ObjectMap} from "./generic";
import {hexDiff} from "node-vibrant/lib/util";

export function convert(hex: string): ColorMatchType {
  // Create map with pairs of `diffOfColors: paletteColorObject`
  // - In the case of two colors being exactly (decimal) the same difference,
  //   the `Map` will prefer the last one entered into the constructor
  const colorDiffMap: Map<number, ColorMatchType> = new Map(
    colorArray.map((colorObject) => [hexDiff(hex, colorObject.value), colorObject])
  );

  // Get the difference value to the closest color
  const closestColorDiff = Math.min(...colorDiffMap.keys());

  // Return the color object
  return colorDiffMap.get(closestColorDiff);
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

// eslint-disable-next-line
declare function getFormatValue(color: TinyColor, format: 'hex'): { data: $Call<TinyColor.toHex>, formatted: $Call<TinyColor.toHex> }
// eslint-disable-next-line
declare function getFormatValue(color: TinyColor, format: 'rgb'): { data: $Call<TinyColor.toRgb>, formatted: $Call<TinyColor.toRgb>, orderOfKeys: ($Keys<$Call<TinyColor.toRgb>>)[] }
// eslint-disable-next-line
declare function getFormatValue(color: TinyColor, format: 'hsl'): { data: $Call<TinyColor.toHsl>, formatted: $Call<TinyColor.toHsl>, orderOfKeys: ($Keys<$Call<TinyColor.toHsl>>)[] }
// eslint-disable-next-line
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
