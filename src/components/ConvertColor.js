// @flow

import React from 'react';
import ColorPicker from "./ColorPicker";
import type {ColorResult} from 'react-color';

type ConvertColorPropType = {
  toggleScrim: () => void
};

export default class ColorsList extends React.Component<ConvertColorPropType, {
  color: string,
  displayColorPicker: boolean
}> {
  state = {
    displayColorPicker: false,
    color: '#000000',
  };

  handleClick = () => {
    this.setState(prevState => {
      return { displayColorPicker: !prevState.displayColorPicker }
    });
    this.props.toggleScrim();
  };

  handleChange = (color: ColorResult) => {
    this.setState({ color: color.hex });
  };

  convert = () => {
    // convertColor(this.state.color)
    //   .then(res => console.log(res))
  };

  render() {
    return (
     <ColorPicker/>
    )
  }
}
