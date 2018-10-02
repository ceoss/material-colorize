/*
 * This component should list the colors that are called in
 */

import React from 'react';
import PropTypes from 'prop-types';
import {colorNumbers, mainColorNumber} from '../shared/colors';
import Color from './Color';

export default function ColorList(props) {
  return (
    <div>
      <p>{props.colorName}</p>
      {
        props.numbers.length === 0 ? true : props.numbers.includes(mainColorNumber)
          && <Color color={props.color} key={`${props.colorName}${mainColorNumber}`} colorName={props.colorName} number={mainColorNumber}/>
      }
      {
        colorNumbers
          .filter(number => number !== mainColorNumber &&
            (props.numbers.length === 0 ? true : props.numbers.includes(number)))
          .map(number =>
            <Color color={props.color} key={`${props.colorName}${number}`} colorName={props.colorName} number={number}/>)
      }
    </div>
  );
}

ColorList.propTypes = {
  colorName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  numbers: PropTypes.array.isRequired,
};