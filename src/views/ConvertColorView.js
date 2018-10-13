// @flow

import React from "react";
import Button from '@material-ui/core/Button';
import ColorPicker from "../components/ColorPicker";
import Color from "../components/Color";
import type {ColorResult} from 'react-color';
import {convert} from "../shared/convert";
import type {ColorArrayType} from "../shared/colors";

type ConvertColorViewPropType = {
  format?: string
};

export default class ConvertColorView extends React.Component<ConvertColorViewPropType, {
  color: string,
  convertedColor: ColorArrayType | null
}> {
  state = {
    color: '#FFFFFF',
    convertedColor: null
  };

  handleColorChange = (color: ColorResult) => {
    this.setState({color: color.hex});
  };

  convertColor = () => {
    this.setState({convertedColor: convert(this.state.color)});
  };

  static defaultProps = {
    format: 'hex'
  };

  render() {
    const {format} = this.props;
    const {color, convertedColor} = this.state;
    return (
      <div>
        <div>
          <Color format={format} color={color} colorName={color}/>
          <ColorPicker color={color}
                       changeColor={this.handleColorChange}/>
          <Button variant="contained" color="primary" onClick={this.convertColor}>
            Convert
          </Button>
          {
            convertedColor &&
              <Color format={format}
                     color={convertedColor.value}
                     colorName={convertedColor.color}
                     number={convertedColor.number}/>
          }

        </div>
      </div>
    );
  }
}
