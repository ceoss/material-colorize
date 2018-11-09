// @flow

import React, {useRef, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Popper from '@material-ui/core/Popper';
import {ChromePicker} from 'react-color';
import type {ColorResult} from 'react-color';
import style from './style';
import type {SetStateType} from "../../shared/generic";
import {Portal} from "@material-ui/core";

type ColorPickerPropType = {
  classes?: typeof style,
  color: string,
  changeColor: (color: ColorResult) => void
}

function ColorPicker(props: ColorPickerPropType) {
  const arrowRef = useRef(null);
  const anchorEl = useRef(null);
  const [open, setOpen]: SetStateType<boolean> = useState(false);
  const {classes, color, changeColor} = props;
  const id = open ? 'scroll-playground' : null;

  return (
    <React.Fragment>
      <div>
        <ButtonBase
          buttonRef={anchorEl}
          variant="contained"
          onClick={() => setOpen(!open)}
          aria-describedby={id}
        >
          <div className={classes.swatch}>
            <div className={classes.color} style={{background: color}}/>
          </div>
        </ButtonBase>
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl.current}
          placement="bottom"
          disablePortal={false}
          className={classes.popper}
          modifiers={{
            flip: {
              enabled: true,
            },
            arrow: {
              enabled: true,
              element: arrowRef.current,
            },
          }}
        >
          <span className={classes.arrow} ref={arrowRef}/>
          <ChromePicker disableAlpha color={color} onChange={changeColor}/>
        </Popper>
      </div>

      <Portal container={document.body}>
        {
          open ?
            <div className={classes.scrim} onClick={() => setOpen(false)}/> :
            <div/>
        }
      </Portal>
    </React.Fragment>
  );
}

export default withStyles(style)(ColorPicker);
