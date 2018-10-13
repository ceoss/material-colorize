import React from "react";
import ColorPicker from "../components/ColorPicker";
import Color from "../components/Color";
import type {ColorResult} from 'react-color';

export default class ConvertColorView extends React.Component<ConvertColorViewPropType, {
  color: string,
  convertedColor: string | null
}> {
  state = {
    color: '#FFFFFF',
    convertedColor: null
  };

  handleColorChange = (color: ColorResult) => {
    this.setState({color: color.hex});
  };

  static defaultProps = {
    format: 'hex'
  };

  render() {
    const {format} = this.props;
    const {color} = this.state;
    return (
      <div>
        <div>
          <Color format={format} color={color} colorName={color}/>
          <ColorPicker color={color}
                       changeColor={this.handleColorChange}/>
        </div>
        <div>
          <Color format={format} color={color} colorName={color}/>
        </div>
      </div>
    );
  }
}

type ConvertColorViewPropType = {
  format?: string
};
