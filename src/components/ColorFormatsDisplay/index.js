// @flow

import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import GenericFormatDisplay from "../GenericFormatDisplay";
import {withStyles} from "@material-ui/core";
import style from "./style";
import {formats} from "../../shared/colors";
import type {TinyColor} from 'tinycolor2';
import {getFormatString, getFormatValue} from "../../shared/convert";

type ColorFormatDisplayPropType = {
  classes?: typeof style,
  color: TinyColor // TODO: Fix typing
}

function ColorFormatsDisplay(props: ColorFormatDisplayPropType) {
  const {color} = props;
  return (
    <Grid direction="column">
      {
        formats.map(format => {
          const formatVal = getFormatValue(color, format);
          const copyVal = getFormatString(color, format);
          const displayVal = typeof formatVal === 'string' ? [formatVal] : Object.keys(formatVal).map(key => formatVal[key]);
          return <GenericFormatDisplay formatName={format} displayVal={displayVal} copyVal={copyVal}/>
        })
      }
    </Grid>
  )
}


export default withStyles(style)(ColorFormatsDisplay);
