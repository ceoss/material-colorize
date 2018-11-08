// @flow

import React, {useState} from 'react';
import ColorList from '../components/ColorList';
import {
  colorNames,
  colorNumbers,
  colors
} from '../shared/colors';
import GenericMultiSelect from "../components/GenericMultiSelect";
import type {SetStateType} from "../shared/generic";

type PalleteListViewPropType = {
  format?: string
}

export default function PaletteListView(props: PalleteListViewPropType) {
  const [stateColors, setColors]: SetStateType<string[]> = useState([]);
  const [numbers, setNumbers]: SetStateType<string[]> = useState([]);
  const {format = 'hex'} = props;

  return (
    <div>
      <GenericMultiSelect handleChange={event => setColors(event.target.value)} value={stateColors} inputId="colors-selector"
                          options={colorNames} label="Colors"/>
      <GenericMultiSelect handleChange={event => setNumbers(event.target.value)} value={numbers} inputId="numbers-selector"
                          options={colorNumbers} label="Numbers"/>
      {
        colorNames
          .filter(color => stateColors.length === 0 ? true : stateColors.includes(color))
          .map(color =>
            <ColorList format={format} key={color} colorName={color} color={colors[color]} numbers={numbers}/>
          )
      }
    </div>
  );
}
