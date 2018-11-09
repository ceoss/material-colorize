// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import style from "./style";
import CopyIcon from "../CopyIcon";
import Grid from "@material-ui/core/Grid/Grid";

type ColorListPropType = {
  allowCopy?: boolean,
  copyVal: string,
  displayVal: string[],
  classes?: typeof style,
  formatName: string
}

function GenericFormatDisplay(props: ColorListPropType) {
  const {allowCopy = false, formatName, displayVal, copyVal, classes} = props;
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      className={classes.colorDisplay}
    >
      <Typography className={`uppercase bold ${classes.formatName}`}>{formatName}</Typography>
      {
        displayVal.map((displayStr, _, arr) =>
          // TODO: Add tiny letter icon in corner to show what value it is? Maybe a hover-over?
          <Typography variant="button" className={arr.length === 1 ? '' : classes.threeCharLength}>{displayStr}</Typography>
        )
      }
      {allowCopy ? <CopyIcon className={classes.copyIcon} copyVal={copyVal}/> : null}
    </Grid>
  );
}

export default withStyles(style)(GenericFormatDisplay);
