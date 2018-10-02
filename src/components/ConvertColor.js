// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import ColorPicker from "./ColorPicker";

export default class ColorsList extends React.Component {
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

ColorsList.propTypes = {
  toggleScrim: PropTypes.func.isRequired
};
