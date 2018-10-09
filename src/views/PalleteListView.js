import React from 'react';
import ColorList from '../components/ColorList';
import {
  colorNames,
  colorNumbers,
  colors
} from '../shared/colors';
import GenericMultiSelect from "../components/GenericMultiSelect";
import PropTypes from "prop-types";

export default class PalleteListView extends React.Component {
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
    const {format} = this.props;
    const {colors: stateColors, numbers} = this.state;
    return (
      <div>
        <GenericMultiSelect handleChange={this.changeColor} value={stateColors} inputId="colors-selector"
                            options={colorNames} label="Colors"/>
        <GenericMultiSelect handleChange={this.changeNumber} value={numbers} inputId="numbers-selector"
                            options={colorNumbers} label="Numbers"/>
        {
          colorNames
            .filter(color => stateColors.length === 0 ? true : stateColors.includes(color))
            .map(color =>
              <ColorList format={format} key={color} colorName={color} color={colors[color]} numbers={numbers}/>
            )
        }
      </div>
    );
  }
}

PalleteListView.propTypes = {
  format: PropTypes.string,
};

ColorList.defaultProps = {
  format: 'hex'
};
