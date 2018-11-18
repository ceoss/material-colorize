// @flow

import React, {useRef, useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import type {ColorResult} from 'react-color';
import {ChromePicker} from 'react-color';
import style from './style';
import type {SetStateType} from "../../shared/generic";
import {Portal} from "@material-ui/core";
import ColorizeIcon from '@material-ui/icons/ColorizeOutlined';
import IconButton from "@material-ui/core/IconButton/IconButton";

type ColorPickerPropType = {
  classes?: typeof style,
  color: string,
  changeColor: (color: ColorResult) => void,
  onClose?: () => void,
  className?: string,
  style?: Object
}

function ColorPicker(props: ColorPickerPropType) {
  const arrowRef = useRef(null);
  const anchorEl = useRef(null);
  const [open, setOpen]: SetStateType<boolean> = useState(false);
  const {style: styleProp = {}, className = '', classes, color, changeColor, onClose} = props;
  const id = open ? 'scroll-playground' : null;

  return (
    <React.Fragment>
      <div className={className} style={styleProp}>
        <IconButton
          buttonRef={anchorEl}
          color="inherit"
          onClick={() => {
            setOpen(!open);
            if (!open && onClose) {
              onClose();
            }
          }}>
          <ColorizeIcon/>
        </IconButton>
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
            <div className={classes.scrim} onClick={() => {
              setOpen(false);
              if (onClose) {
                onClose();
              }
            }}/> :
            <div/>
        }
      </Portal>
    </React.Fragment>
  );
}

export default withStyles(style)(ColorPicker);
