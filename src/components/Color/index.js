// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Check from '@material-ui/icons/Check';
import type {TinyColor} from "tinycolor2";
import tinycolor from 'tinycolor2';
import type {ColorType, SelectedColor} from "../../shared/colors";
import {useReadableColor} from "../../shared/colors";
import Paper from '@material-ui/core/Paper';
import {titleFromCamelCase} from "../../shared/generic";
import {withStyles} from "@material-ui/core";
import style from "./style";

// TODO: Add highlight color of tinycolor compliment. This should allow A11Y users to HOPEFULLY see highlights? :/
// TODO: Might wanna make that only for keyboard, as there is already a hover effect on

type ColorPropType = {
  color: ColorType | string,
  colorName: string,
  number?: string,
  className?: string,
  classes?: typeof style,
  isSelected?: boolean,
  displayUnselected?: boolean,
  unraiseSelected?: boolean,
  select: (val: SelectedColor) => void
}

function Color(props: ColorPropType) {
  const {number, color, colorName = '', className, classes, isSelected, select, displayUnselected, unraiseSelected} = props,
    actualColor: string = (number && (color[(number: any)]: any)) || (color: any),
    tinyActualColor = tinycolor(actualColor),
    strColor = tinyActualColor.toHexString();
  const readableColor: TinyColor = useReadableColor(strColor);
  const selectFunc = () => select({
    colorName,
    ...(number ? {colorNumber: number} : {})
  });
  const properlySpacedName = titleFromCamelCase(colorName);

  return (
    <Paper
      tabIndex={0}
      role="button"
      aria-label={`${properlySpacedName} ${number || ''}`}
      aria-pressed={!!isSelected}
      style={{
        background: strColor,
        color: readableColor.toHexString()
      }}
      onClick={selectFunc}
      onKeyPress={selectFunc}
      className={`${className} ${classes.colorDiv}`}
      elevation={isSelected && !unraiseSelected ? 3 : 0}>
      {(isSelected || displayUnselected) && <Grid
        className="full-height"
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography className="text-caps" color="inherit">{properlySpacedName} {number || ''}</Typography>
        {isSelected && <Check/>}
      </Grid>
      }
    </Paper>
  );
}

export default withStyles(style)(Color);
