// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import ListColor from '../ListColor/ListColor';
import {mainColorNumber, primaryColorNumbers, accentColorNumbers} from '../../shared/colors';
import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} from 'material-ui/colors';
import './ColorsList.css';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    maxWidth: 300,
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


class ColorsList extends React.Component {
  colors = ['amber',
    'blue',
    'blueGrey',
    'brown',
    'cyan',
    'deepOrange',
    'deepPurple',
    'green',
    'grey',
    'indigo',
    'lightBlue',
    'lightGreen',
    'lime',
    'orange',
    'pink',
    'purple',
    'red',
    'teal',
    'yellow']

  amber = amber;
  blue = blue;
  blueGrey = blueGrey;
  brown = brown;
  cyan = cyan;
  deepOrange = deepOrange;
  deepPurple = deepPurple;
  green = green;
  grey = grey;
  indigo = indigo;
  lightBlue = lightBlue;
  lightGreen = lightGreen;
  lime = lime;
  orange = orange;
  pink = pink;
  purple = purple;
  red = red;
  teal = teal;
  yellow = yellow;

  state = {
    colors: [],
    numbers: []
  };

  changeColor = event => {
    this.setState({ colors: event.target.value, numbers: this.state.numbers });
  };

  changeNumber = event => {
    this.setState({ numbers: event.target.value, colors: this.state.colors });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-multiple">Colors</InputLabel>
          <Select
            multiple
            value={this.state.colors}
            onChange={this.changeColor}
            input={<Input id="name-multiple" />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                  width: 200,
                },
              },
            }}
          >
            {this.colors.map(color => (
              <MenuItem
                key={color}
                value={color}
                style={{
                  fontWeight: this.state.colors.indexOf(color) !== -1 ? '500' : '400',
                }}
              >
                {color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="name-multiple">Numbers</InputLabel>
          <Select
            multiple
            value={this.state.numbers}
            onChange={this.changeNumber}
            input={<Input id="name-multiple" />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                  width: 200,
                },
              },
            }}
          >
            <MenuItem
              key={mainColorNumber}
              value={mainColorNumber}
              style={{
                fontWeight: this.state.numbers.indexOf(mainColorNumber) !== -1 ? '500' : '400',
              }}
            >
              {mainColorNumber}
            </MenuItem>
            {primaryColorNumbers.map(number => (
              <MenuItem
                key={number}
                value={number}
                style={{
                  fontWeight: this.state.numbers.indexOf(number) !== -1 ? '500' : '400',
                }}
              >
                {number}
              </MenuItem>
            ))}
            {accentColorNumbers.map(number => (
              <MenuItem
                key={number}
                value={number}
                style={{
                  fontWeight: this.state.numbers.indexOf(number) !== -1 ? '500' : '400',
                }}
              >
                {number}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {
          this.colors
            .filter(color => this.state.colors.length === 0 ? true : this.state.colors.includes(color))
            .map(color => <ListColor colorName={color} color={this[color]} numbers={this.state.numbers}></ListColor>)
        }
      </div>
    );
  }
}

ColorsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorsList);