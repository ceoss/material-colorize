import React from "react";
import ColorPicker from "../components/ColorPicker";
import Color from "../components/Color";

export default class ConvertColorView extends React.Component<ConvertColorViewPropType> {
  state = {
    color: '#FFFFFF',
    convertedColor: null
  };

  handleColorChange = (color) => {
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
          <ColorPicker color={this.state.color}
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
