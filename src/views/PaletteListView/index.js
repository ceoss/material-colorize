// @flow

import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import ColorList from '../../components/ColorList';
import {colorNames, colorNumbers} from '../../shared/colors';
import GenericMultiSelect from "../../components/GenericMultiSelect";
import type {SetStateType} from "../../shared/generic";
import ColorFormatsDisplay from "../../components/ColorFormatsDisplay";
import {colors, mainColorNumber} from '../../shared/colors';
import style from "./style";
import {withStyles} from "@material-ui/core";
import type {SelectedColor} from "../../shared/colors";

type PaletteListViewPropType = {
  classes?: typeof style
}

function PaletteListView(props: PaletteListViewPropType) {
  const [stateColors, setColors]: SetStateType<string[]> = useState([]);
  const [stateNumbers, setNumbers]: SetStateType<string[]> = useState([]);
  const [selectedColor, setColor]: SetStateType<SelectedColor> = useState({
    colorName: 'red',
    colorNumber: '500'
  });
  const {classes} = props;

  return (
    <Grid
      className="full-height"
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      wrap="nowrap"
    >
      <div>
        <ColorFormatsDisplay color={colors[selectedColor.colorName][selectedColor.colorNumber]}/>
      </div>
      <div className={`grow ${classes.borderedList} overflowAuto`}>
        <GenericMultiSelect handleChange={event => setColors(event.target.value)} value={stateColors}
                            inputId="colors-selector"
                            options={colorNames} label="Colors"/>
        <GenericMultiSelect handleChange={event => setNumbers(event.target.value)} value={stateNumbers}
                            inputId="numbers-selector"
                            options={colorNumbers} label="Numbers"/>
        <ColorList
          select={setColor}
          selected={selectedColor}
          colorNames={stateColors && stateColors.length !== 0 ? stateColors : colorNames}
          colorNumbers={stateNumbers && stateNumbers.length !== 0 ? stateNumbers : colorNumbers}/>
      </div>
    </Grid>
  );
}

export default withStyles(style)(PaletteListView);
