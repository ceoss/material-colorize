import {colorNumbers, colorNames, white, black, mainColorNumber, colors} from './colors';


export function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const splitHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(splitHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function convertHexToValue(from, to) {
  const materialRgb = hexToRgb(from);
  const colorRgb = hexToRgb(to);
  const diffColor = (key) => Math.abs(materialRgb[key] - colorRgb[key]);
  return diffColor('r') + diffColor('g') + diffColor('b');
}

export function convert(color) {
  let objects = Object.keys(colors).map(colorName =>
    Object.keys(colors[colorName]).map(number => {
      const colorHex = colors[colorName][number];
      return {
        color: colorName,
        number: number,
        value: convertHexToValue(colorHex, color)
      };
    })
  );

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

  const fullObjects = [...objects, whiteObject, blackObject];

  let values = fullObjects.map(res => res.value);

  return fullObjects[values.indexOf(Math.min(...values))];
}
