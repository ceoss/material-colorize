// @flow weak

/*
 * This component should list the colors that are called in
 */

import React from 'react';
import PropTypes from 'prop-types';
import {mainColorNumber, primaryColorNumbers, accentColorNumbers} from '../../shared/colors';
import Color from '../Color/Color';
import './ListColor.css';

export default class ListColor extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.colorName}</p>
        {
          this.props.numbers.length === 0 ? true : this.props.numbers.includes(mainColorNumber)
            && <Color color={this.props.color} colorName={this.props.colorName} number={mainColorNumber}/>
        }
        {
          primaryColorNumbers
            .filter(number => this.props.numbers.length === 0 ? true : this.props.numbers.includes(number))
            .map(number => <Color color={this.props.color} colorName={this.props.colorName} number={number}/>)
        }
        {
          accentColorNumbers
            .filter(number => this.props.numbers.length === 0 ? true : this.props.numbers.includes(number))
            .map(number => <Color color={this.props.color} colorName={this.props.colorName} number={number}/>)
        }
      </div>
    );
  }
}

ListColor.propTypes = {
  colorName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
  numbers: PropTypes.array.isRequired,
};