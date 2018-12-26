// @flow

import React, {useState} from "react";
import ColorPicker from "../../components/ColorPicker";
import type {ColorResult} from 'react-color';
import type {ColorMatchType} from "../../shared/colors";
import {useReadableColor, whiteColorMatch} from "../../shared/colors";
import type {SetStateType} from "../../shared/generic";
import {titleFromCamelCase} from "../../shared/generic";
import {convert} from "../../shared/convert";
import Grid from "@material-ui/core/Grid";
import ColorFormatsDisplay from '../../components/ColorFormatsDisplay';
import type {TinyColor} from 'tinycolor2';
import tinycolor from 'tinycolor2';
import style from "./style";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import {useIsSmall} from "../../shared/generic-hooks";

type ConvertColorViewPropType = {
  classes?: typeof style,
  width: Breakpoint
};

function ConvertColorView(props: ConvertColorViewPropType) {
  const {classes, width} = props;
  const [convertedColor, setConvertedColor]: SetStateType<ColorMatchType | null> = useState(whiteColorMatch);
  const [color, setColor]: SetStateType<string> = useState('#FFFFFF');
  const readableColor: TinyColor = useReadableColor(color);
  const readableConvertedColor: TinyColor = useReadableColor(convertedColor && convertedColor.value);
  const isSmall = useIsSmall(width);

  return (
    <Grid
      container
      direction="row"
      className="full-height"
      wrap={isSmall ? 'wrap' : 'nowrap'}
      justify="space-around">
      <Grid
        className={classes.colorDiv}
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
      >
        <div className={`square relative ${classes.color}`} style={{background: color}}>
          <ColorPicker color={color}
                       style={{color: readableColor.toHexString()}}
                       className={classes.pickerClass}
                       changeColor={(clr: ColorResult) => setColor(clr.hex)}
                       onClose={() => setConvertedColor(convert(color))}/>
        </div>
        <ColorFormatsDisplay className="full-width"
                             color={color}/>
      </Grid>

      <Grid
        className={classes.colorDiv}
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        wrap="nowrap"
      >
        <div className={`square relative ${classes.color}`} style={{background: convertedColor.value}}>
          <Typography variant="h4" className={`text-caps ${classes.colorTitle}`}
                      style={{color: readableConvertedColor}}>
            {titleFromCamelCase(convertedColor.color)} {convertedColor.number}
          </Typography>
        </div>
        <ColorFormatsDisplay className="full-width"
                             color={tinycolor(convertedColor.value)}
                             allowCopy={true}/>
      </Grid>

    </Grid>
  );
}

export default withStyles(style)(withWidth()(ConvertColorView));
