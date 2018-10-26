// @flow
/*
 * This component should list the colors that are called in
 */

import React from 'react';
import {colorNumbers, mainColorNumber} from '../shared/colors';
import Color from './Color';
import type {ColorType} from "../shared/colors";
import Typography from '@material-ui/core/Typography';
import {titleFromCamelCase} from "../shared/generic";

type ColorListPropType = {
  color: ColorType,
  colorName: string,
  numbers: string[],
  format?: string
}

export default function ColorList(props: ColorListPropType) {
  const {numbers, colorName, format, color} = props;
  return (
    <div>
      <Typography className="text-caps" variant="h3" noWrap={true}>{titleFromCamelCase(colorName)}</Typography>
      {
        numbers.length === 0 ? true : numbers.includes(mainColorNumber)
          && <Color className="margin-20" color={color} key={`${colorName}${mainColorNumber}`} colorName={colorName} number={mainColorNumber}/>
      }
      {
        colorNumbers
          .filter(number => number !== mainColorNumber &&
            (numbers.length === 0 ? true : numbers.includes(number)))
          .map(number =>
            <Color className="margin-20" color={color} key={`${colorName}${number}`} colorName={colorName} number={number}
                   format={format}/>)
      }
    </div>
  );
}
