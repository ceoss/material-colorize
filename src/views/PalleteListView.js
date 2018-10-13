import React from 'react';
import ColorList from '../components/ColorList';
import {
  colorNames,
  colorNumbers,
  colors
} from '../shared/colors';
import GenericMultiSelect from "../components/GenericMultiSelect";

export default class PalleteListView extends React.Component<PalleteListViewPropType, {
  colors: string[],
  numbers: string[]
}> {
  state = {
    colors: [],
    numbers: []
  };

  changeColor = (event: any) => {
    this.setState({colors: event.target.value});
  };

  changeNumber = (event: any) => {
    this.setState({numbers: event.target.value});
  };

  static defaultProps = {
    format: 'hex'
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

type PalleteListViewPropType = {
  format?: string
}
