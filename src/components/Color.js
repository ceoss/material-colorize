// @flow

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import tinycolor, {mostReadable} from 'tinycolor2';
import {getColorFormat} from "../shared/convert";
import type {ColorType} from "../shared/colors";
import CopyIcon from "./CopyIcon";

type ColorPropType = {
  color: ColorType | string,
  colorName: string,
  subText?: string,
  number?: string,
  format: string,
  className?: string
}

export default function Color(props: ColorPropType) {
  const {number, color, colorName = '', format = 'hex', subText, className} = props,
    actualColor: string = (number && (color[(number: any)]: any)) || (color: any),
    tinyActualColor = tinycolor(actualColor),
    formattedColor = getColorFormat(actualColor, format),
    strColor = tinyActualColor.toHexString(),
    darkenedColor = tinyActualColor.darken(60).toHexString(),
    lightenedColor = tinyActualColor.lighten(80).toHexString(),
    readableColor = mostReadable(strColor, [darkenedColor, lightenedColor], {includeFallbackColors: true}).toHexString();

  return (
    <Card style={{backgroundColor: strColor, color: readableColor}} className={className}>
      <CardContent>
        <Typography type="headline" color="inherit" component="h2" className="text-caps">
          {colorName} {number}
        </Typography>
      </CardContent>
      <CardActions disableActionSpacing>
        {/* TODO: Fix styling */}
        {subText ? <p>{subText}</p> : null}
        <div className="grow"/>
        <CopyIcon copyVal={formattedColor}/>
      </CardActions>
    </Card>
  );
}
