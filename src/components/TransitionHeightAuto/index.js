// @flow

import React from 'react';
import {withStyles} from "@material-ui/core";
import style from "./style";

type ColorPropType = {
  show: boolean,
  classes?: typeof style,
  position: 'top' | 'bottom',
  size: ClientRect
}

function TransitionHeightAuto(props: ColorPropType) {
  const {children, classes, show, position = 'top', size: contentSize} = props;

  return (
    <div
      style={{height: show ? `${contentSize ? contentSize.height + 'px' : ''}` : '0px'}}
      className={`absolute full-width ${position}Zero leftZero hideOverflow ${classes.transitionHeight}`}>
      <div style={{height: `${contentSize ? contentSize.height + 'px' : ''}`}}>
          {children}
      </div>
    </div>
  );
}

export default withStyles(style)(TransitionHeightAuto);
