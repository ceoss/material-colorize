import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Popper from '@material-ui/core/Popper';
import {ChromePicker} from 'react-color'
import style from './style';

class ColorPicker extends React.Component {
  state = {
    arrowRef: null,
    open: false,
    color: '#FFFFFF'
  };

  handleClickButton = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    });
  };


  handleColorChange = (color) => {
    console.log(color);
    this.setState({ color: color.hex });
  };


  render() {
    const {classes} = this.props;
    const {open, arrowRef} = this.state;
    const id = open ? 'scroll-playground' : null;

    return (
      <div>
        <ButtonBase
          buttonRef={node => {
            this.anchorEl = node;
          }}
          variant="contained"
          onClick={this.handleClickButton}
          aria-describedby={id}
        >
          <div className={classes.swatch}>
            <div className={classes.color} style={{background: this.state.color}}/>
          </div>
        </ButtonBase>
        <Popper
          id={id}
          open={open}
          anchorEl={this.anchorEl}
          placement="bottom"
          disablePortal={false}
          className={classes.popper}
          modifiers={{
            flip: {
              enabled: true,
            },
            arrow: {
              enabled: true,
              element: arrowRef,
            },
          }}
        >
          <span className={classes.arrow} ref={this.handleArrowRef}/>
          <ChromePicker disableAlpha color={this.state.color} onChange={this.handleColorChange}/>
        </Popper>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(ColorPicker);
