import React from 'react';
import ColorPicker from "./ColorPicker";

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

  handleChange = (color) => {
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

type ConvertColorPropType = {
  toggleScrim: () => void
};
