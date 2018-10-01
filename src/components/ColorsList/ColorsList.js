import React from 'react';
import ListColor from '../ListColor/ListColor';
import {
  colorNames,
  colorNumbers,
  colors
} from '../../shared/colors';
import './ColorsList.css';
import GenericMultiSelect from "../GenericMultiSelect/GenericMultiSelect";

export default class ColorsList extends React.Component {
  state = {
    colors: [],
    numbers: []
  };

  changeColor = event => {
    this.setState({colors: event.target.value});
  };

  changeNumber = event => {
    this.setState({numbers: event.target.value});
  };

  render() {
    return (
      <div>
        <GenericMultiSelect handleChange={this.changeColor} value={this.state.colors} inputId="colors-selector"
                            options={colorNames} label="Colors"/>
        <GenericMultiSelect handleChange={this.changeNumber} value={this.state.numbers} inputId="numbers-selector"
                            options={colorNumbers} label="Numbers"/>
        {
          colorNames
            .filter(color => this.state.colors.length === 0 ? true : this.state.colors.includes(color))
            .map(color => <ListColor key={color} colorName={color} color={colors[color]} numbers={this.state.numbers}/>)
        }
      </div>
    );
  }
}
