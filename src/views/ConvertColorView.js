// @flow

import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import ColorPicker from "../components/ColorPicker";
import Color from "../components/Color";
import type {ColorResult} from 'react-color';
import type {ColorMatchType} from "../shared/colors";
import type {SetStateType} from "../shared/generic";
import {convert} from "../shared/convert";
import Grid from "@material-ui/core/Grid/Grid";
import GenericFormatDisplay from '../components/GenericFormatDisplay';
import ColorFormatsDisplay from '../components/ColorFormatsDisplay';
import tinycolor from 'tinycolor2';
import type {TinyColor} from 'tinycolor2';

type ConvertColorViewPropType = {
  format?: string
};

export default function ConvertColorView(props: ConvertColorViewPropType) {
  const {format = 'hex'} = props;

  const [convertedColor, setConvertedColor]: SetStateType<ColorMatchType | null> = useState(null);
  const [color, setColor]: SetStateType<TinyColor> = useState(tinycolor('#FFFFFF'));

  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      justify="space-around">
      <Grid
        container
        direction="column"
        alignItems="center">
        <Color format={format} color={color.toRgbString()} colorName={color.toRgbString()}/>
        <ColorPicker color={color.toRgbString()}
                     changeColor={(clr: ColorResult) => setColor(tinycolor(clr.hex))}/>
        <ColorFormatsDisplay color={color}/>

        <Button variant="contained" color="primary" onClick={() => setConvertedColor(convert(color.toRgbString()))}>
          Convert
        </Button>

      </Grid>

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        {
          convertedColor &&
          <React.Fragment>
            <Color format={format}
                   color={convertedColor.value}
                   colorName={convertedColor.color}
                   number={convertedColor.number}/>
            <ColorFormatsDisplay color={tinycolor(convertedColor.value)} formatName={format}/>
          </React.Fragment>
        }

      </Grid>

    </Grid>
  );
}
