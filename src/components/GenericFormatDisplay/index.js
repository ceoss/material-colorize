// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core";
import style from "./style";
import Grid from "@material-ui/core/Grid/Grid";

type ColorListPropType = {
  displayVal: string[],
  classes?: typeof style,
  formatName: string,
  appendIcon?: React.ComponentType<any>
}

function GenericFormatDisplay(props: ColorListPropType) {
  const {formatName, displayVal, classes, appendIcon} = props;
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      wrap="nowrap"
      className={classes.colorDisplay}
    >
      <Typography className={`uppercase bold ${classes.formatName}`}>{formatName}</Typography>
      {
        displayVal.map((displayStr, i, arr) =>
          // TODO: Add tiny letter icon in corner to show what value it is? Maybe a hover-over?
          <Typography key={`${formatName}${i}${displayStr}`} variant="button"
                      className={arr.length === 1 ? '' : classes.threeCharLength}>{displayStr}</Typography>
        )
      }
      {appendIcon || null}
    </Grid>
  );
}

export default withStyles(style)(GenericFormatDisplay);
