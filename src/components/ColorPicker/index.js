import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Popper from '@material-ui/core/Popper';
import {ChromePicker} from 'react-color'
import style from './style';

class ColorPicker extends React.Component<ColorPickerPropType> {
  state = {
    arrowRef: null,
    open: false,
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
  classes: {},
  color: string,
  changeColor: (color: string) => void
}

ColorPicker.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
};

export default withStyles(style)(ColorPicker);
