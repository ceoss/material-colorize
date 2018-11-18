import Vibrant from 'node-vibrant';
import {ObjectMap} from "./generic";
import tinycolor from 'tinycolor2';
import {convert} from "./convert";
import type {ColorMatchType} from "./colors";

type Swatch = {
  b: number,
  g: number,
  r: number,
  _hsl: number[],
  _population: number,
  _rgb: number[]
}

export type ColorPalette<T = Swatch> = {
  DarkMuted: T,
  DarkVibrant: T,
  LightMuted: T,
  LightVibrant: T,
  Muted: T,
  Vibrant: T
}

export async function getImagePalette(fileUrl): ColorPalette<ColorMatchType> {
  const palette: ColorPalette = await Vibrant.from(fileUrl)
    .getPalette();
  console.log('palette', palette);
  return ObjectMap(palette, val => {
    const {r, g, b} = val;
    const tinyRGB = tinycolor({
      r,
      g,
      b
    });
    return convert(tinyRGB.toRgbString());
  })
}
