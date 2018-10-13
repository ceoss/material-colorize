import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Popper from '@material-ui/core/Popper';
import {ChromePicker} from 'react-color';
import type {ColorResult} from 'react-color';
import style from './style';

class ColorPicker extends React.Component<ColorPickerPropType, {
  arrowRef: any,
  open: boolean
}> {
  state = {
    arrowRef: null,
    open: false,
  };

  anchorEl: any;

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

  render() {
    const {classes, color, changeColor} = this.props;
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
            <div className={classes.color} style={{background: color}}/>
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
          <ChromePicker disableAlpha color={color} onChange={changeColor}/>
        </Popper>
      </div>
    );
  }
}

type ColorPickerPropType = {
  // TODO: Fix the Classes typing
  classes: any,
  color: string,
  changeColor: (color: ColorResult) => void
}

export default withStyles(style)(ColorPicker);
