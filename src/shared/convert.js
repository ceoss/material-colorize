// @flow

import type {ColorMatchType} from './colors';
import {colorArray, formats} from './colors';
import type {TinyColor} from 'tinycolor2';
import tinycolor from 'tinycolor2';
import {ObjectMap} from './generic';
import diff from 'color-diff';


// Hoist upcase RGB objects so they're only created once (on first use)
let colorMapRgb: Map<diff.RGBColor, ColorMatchType>;
let palette: Array<diff.RGBColor>;

export function convert(fromHex: string): ColorMatchType {
  // Convert input color to upcase RGB object
  const fromRgb = tinycolor(fromHex).toRgb();

  if (!colorMapRgb || !palette) {
    // Create `Map` with pairs of `upcaseRgbObject: paletteColorObject`
    colorMapRgb = new Map(
      colorArray.map((colorObject) => [tinycolor(colorObject.value).toRgb(), colorObject])
    );
    // Create palette from `Map` keys
    palette = Array.from(colorMapRgb.keys());
  }

  // Get the closest RGB object to the from color
  // - `color-diff` uses CIEDE2000 which is better for this scenario than adding
  //   the difference, euclidean distance, or the older Delta E's (see issue #6)
  const closestRgb = diff.closest(fromRgb, palette);

  // Return the color object from the colorMap that corresponds with it
  return colorMapRgb.get(closestRgb);
};

// TODO: Both of these functions should share some logic of some kind like a lookup table for the allowed formats
export function getFormatString(color: TinyColor, format: $Values<formats>): string {
  switch (format) {
    case 'hex':
      return color.toHexString();
    case 'rgb':
      return color.toRgbString();
    case 'hsl':
      return color.toHslString();
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
