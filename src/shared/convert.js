import {colorNumbers, colorNames, white, black, mainColorNumber, colors} from './colors';


export function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function convertHexToValue(from, to) {
  const materialRgb = hexToRgb(from);
  const colorRgb = hexToRgb(to);
  return Math.abs(materialRgb.r - colorRgb.r) + Math.abs(materialRgb.g - colorRgb.g) + Math.abs(materialRgb.b - colorRgb.b);
}

export async function convert(color) {
  let min = { value: 9000, number: '', color: '' };

  let objects = await colorNames.map(colorName => {
    return colorNumbers.map(number => {
      const colorHex = colors[colorName][number];
      return {
        color: colorName,
        number: number,
        value: convertHexToValue(colorHex, color)
      };
    })
  });

  const blackObject = {
    color: 'black',
    number: mainColorNumber,
    value: convertHexToValue(black, color)
  };


  const whiteObject = {
    color: 'white',
    number: mainColorNumber,
    value: convertHexToValue(white, color)
  };

  objects = await [].concat.apply([], [...objects, whiteObject, blackObject]);

  let values = await objects.map(res => res.value);

  return objects[values.indexOf(Math.min(...values))];
}
