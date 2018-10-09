/*
 * This component should list the colors that are called in
 */

import React from 'react';
import PropTypes from 'prop-types';
import {colorNumbers, mainColorNumber} from '../shared/colors';
import Color from './Color';

export default function ColorList(props) {
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

ColorList.propTypes = {
  colorName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  numbers: PropTypes.array.isRequired,
  format: PropTypes.string,
};

ColorList.defaultProps = {
  format: 'hex'
};
