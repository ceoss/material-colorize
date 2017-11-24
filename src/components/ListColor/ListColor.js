// @flow weak

/*
 * This component should list the colors that are called in
 */

import React from 'react';
import PropTypes from 'prop-types';
import './ListColor.css';

export default class ListColor extends React.Component {
  mainColorNumber = '500';

  primaryColorNumbers = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '600',
    '700',
    '800',
    '900'
  ];

  accentColorNumbers = [
    'A100',
    'A200',
    'A400',
    'A700'
  ];

  render() {
    return (
      <div>
        <p>{this.props.colorName}</p>
        <p>{this.mainColorNumber}: {this.props.color[this.mainColorNumber]}</p>
        {
          this.primaryColorNumbers.map(number => <p>{number} : {this.props.color[number]}</p>)
        }
        {
          this.accentColorNumbers.map(number => <p>{number} : {this.props.color[number]}</p>)
        }
      </div>
    );
  }
}

ListColor.propTypes = {
  colorName: PropTypes.string.isRequired,
  color: PropTypes.object.isRequired,
};