/*
 * This component should list the colors that are called in
 */

import React from 'react';
import {colorNumbers, mainColorNumber} from '../shared/colors';
import Color from './Color';
import type {ColorType} from "../shared/colors";

export default function ColorList(props: ColorListPropType) {
  const {numbers, colorName, format, color} = props;
  return (
    <div>
      <p>{colorName}</p>
      {
        numbers.length === 0 ? true : numbers.includes(mainColorNumber)
          && <Color color={color} key={`${colorName}${mainColorNumber}`} colorName={colorName} number={mainColorNumber}/>
      }
      {
        colorNumbers
          .filter(number => number !== mainColorNumber &&
            (numbers.length === 0 ? true : numbers.includes(number)))
          .map(number =>
            <Color color={color} key={`${colorName}${number}`} colorName={colorName} number={number}
                   format={format}/>)
      }
    </div>
  );
}

type ColorListPropType = {
  color: ColorType,
  colorName: string,
  numbers: string[],
  format?: string
}

ColorList.defaultProps = {
  format: 'hex'
};
