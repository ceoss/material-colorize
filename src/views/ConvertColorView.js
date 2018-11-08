// @flow

import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import ColorPicker from "../components/ColorPicker";
import Color from "../components/Color";
import type {ColorResult} from 'react-color';
import type {ColorMatchType} from "../shared/colors";
import type {SetStateType} from "../shared/generic";
import {convert} from "../shared/convert";

type ConvertColorViewPropType = {
  format?: string
};

export default function ConvertColorView(props: ConvertColorViewPropType) {
  const {format = 'hex'} = props;

  const [convertedColor, setConvertedColor]: SetStateType<ColorMatchType | null> = useState(null);
  const [color, setColor]: SetStateType<string> = useState('#FFFFFF');

  return (
    <div>
      <div>
        <Color format={format} color={color} colorName={color}/>
        <ColorPicker color={color}
                     changeColor={(clr: ColorResult) => setColor(clr.hex)}/>
        <Button variant="contained" color="primary" onClick={() => setConvertedColor(convert(color))}>
          Convert
        </Button>
        {
          convertedColor &&
          <Color format={format}
                 color={convertedColor.value}
                 colorName={convertedColor.color}
                 number={convertedColor.number}/>
        }
      </div>
    </div>
  );
}
