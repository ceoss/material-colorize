// @flow

import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import GenericFormatDisplay from "../GenericFormatDisplay";
import {withStyles} from "@material-ui/core";
import style from "./style";
import {formats} from "../../shared/colors";
import type {TinyColor} from 'tinycolor2';
import tinycolor from 'tinycolor2';
import {getFormatString, getFormatValue} from "../../shared/convert";
import CopyIcon from "../CopyIcon";

type ColorFormatDisplayPropType = {
  classes?: typeof style,
  color: string,
  className?: string,
  allowCopy?: boolean,
  appendIcon?: React.ComponentType<any>,
  allowedIconIndexes?: number[]
}

function ColorFormatsDisplay(props: ColorFormatDisplayPropType) {
  const {color, classes, className = '', allowCopy = false, appendIcon, allowedIconIndexes} = props,
    tinyColorColor = tinycolor(color);
  return (
    <Grid container direction="column" className={className}>
      {
        formats.map((format, i) => {
          const formatVal = getFormatValue(tinyColorColor, format);
          const copyVal = getFormatString(tinyColorColor, format);
          const displayVal = typeof formatVal.data === 'string' ? [formatVal.formatted] : formatVal.orderOfKeys.map(key => formatVal.formatted[key]);
          return <GenericFormatDisplay
            formatName={format}
            key={format}
            displayVal={displayVal}
            appendIcon={
              allowCopy ? <CopyIcon className={classes.copyIcon} copyVal={copyVal}/> :
                !allowedIconIndexes || (Array.isArray(allowedIconIndexes) && allowedIconIndexes.includes(i)) ? appendIcon :
                  appendIcon
            }/>
        })
      }
    </Grid>
  )
}

export default withStyles(style)(ColorFormatsDisplay);
