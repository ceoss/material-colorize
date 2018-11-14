// @flow

import React, {useState, useEffect} from "react";
import ColorPicker from "../../components/ColorPicker";
import type {ColorResult} from 'react-color';
import type {ColorMatchType} from "../../shared/colors";
import type {SetStateType} from "../../shared/generic";
import {convert} from "../../shared/convert";
import Grid from "@material-ui/core/Grid/Grid";
import ColorFormatsDisplay from '../../components/ColorFormatsDisplay';
import tinycolor, {mostReadable} from 'tinycolor2';
import type {TinyColor} from 'tinycolor2';
import style from "./style";
import {withStyles} from "@material-ui/core";

type ConvertColorViewPropType = {
  format?: string,
  classes?: typeof style
};

function ConvertColorView(props: ConvertColorViewPropType) {
  const {classes} = props;

  const [convertedColor, setConvertedColor]: SetStateType<ColorMatchType | null> = useState(null);
  const [color, setColor]: SetStateType<string> = useState('#FFFFFF');
  const [readableColor, setReadableColor]: SetStateType<TinyColor> = useState(tinycolor('#FFFFFF'));

  useEffect(() => {
    const darkenedColor = tinycolor(color).darken(60).toHexString(),
      lightenedColor = tinycolor(color).lighten(80).toHexString(),
      readableColor = mostReadable(tinycolor(color), [
        darkenedColor,
        lightenedColor
      ], {includeFallbackColors: true});
    setReadableColor(readableColor);
  }, [color]);

  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      justify="space-around">
      <Grid
        className={classes.colorDiv}
        container
        direction="column"
        alignItems="center">
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
      >
        {
          convertedColor &&
          <React.Fragment>
            <div className={`square ${classes.color}`} style={{background: convertedColor.value}}/>
            {/*<Color format={format}*/}
            {/*color={convertedColor.value}*/}
            {/*colorName={convertedColor.color}*/}
            {/*number={convertedColor.number}/>*/}
            <ColorFormatsDisplay className="full-width"
                                 color={tinycolor(convertedColor.value)}
                                 allowCopy={true}/>
          </React.Fragment>
        }
      </Grid>

    </Grid>
  );
}

export default withStyles(style)(ConvertColorView);
