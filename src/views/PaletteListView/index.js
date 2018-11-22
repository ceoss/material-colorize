// @flow

import React, {useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import ColorList from '../../components/ColorList';
import type {SelectedColor} from "../../shared/colors";
import {colorNames, colorNumbers, colors, mainColorNumber} from '../../shared/colors';
import type {SetStateType} from "../../shared/generic";
import {immutableToggleArray} from "../../shared/generic";
import ColorFormatsDisplay from "../../components/ColorFormatsDisplay";
import style from "./style";
import {withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import {useElementSize} from "../../shared/generic-hooks";
import Color from "../../components/Color";
import TransitionHeightAuto from "../../components/TransitionHeightAuto";

type PaletteListViewPropType = {
  classes?: typeof style
}

function PaletteListView(props: PaletteListViewPropType) {
  const [stateColors, setColors]: SetStateType<string[]> = useState([]);
  const [stateNumbers, setNumbers]: SetStateType<string[]> = useState([]);
  const [showFilter, setShowFilter]: SetStateType<boolean> = useState(false);
  const [selectedColor, setColor]: SetStateType<SelectedColor> = useState({
    colorName: 'red',
    colorNumber: '500'
  });
  const contentEl = useRef();
  const contentSize = useElementSize(contentEl);
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
      <Grid
        className={`grow ${classes.borderedList}`}
        container
        direction="column"
        wrap="nowrap"
      >
        <div>
          <Grid
            className="full-height"
            container
            direction="row"
            justify="flex-end"
          >
            <IconButton className={classes.filterButton} style={showFilter ? {transform: 'rotate(180deg)'} : {}}
                        onClick={() => setShowFilter(!showFilter)}>
              <ArrowDropDown/>
            </IconButton>
          </Grid>
        </div>
        <div className="grow relative" ref={contentEl}>
          <TransitionHeightAuto show={showFilter} position="top" size={contentSize}>
            <Grid className="full-height"
                  container direction="row" wrap="nowrap">
              <div className="overflowAuto full-height grow">
                {
                  colorNames.map(colorName => <div key={colorName}>
                    <Color isSelected={stateColors.includes(colorName)}
                           color={colors[colorName][mainColorNumber]}
                           select={({colorName}) => setColors(immutableToggleArray(stateColors, colorName))}
                           colorName={colorName}/>
                  </div>)
                }
              </div>
              <div className="overflowAuto full-height" style={{width: '120px'}}>
                {
                  colorNumbers.map(colorNumber => <div key={colorNumber}>
                    <Color isSelected={stateNumbers.includes(colorNumber)}
                           color="#FFF"
                           displayUnselected
                           unraiseSelected
                           select={({colorName: colorNum}) => setNumbers(immutableToggleArray(stateNumbers, colorNum))}
                           colorName={colorNumber}/>
                  </div>)}
              </div>
            </Grid>
          </TransitionHeightAuto>
          <TransitionHeightAuto show={!showFilter} position="bottom" size={contentSize}>
            <div className="overflowAuto full-height">
              <ColorList
                select={setColor}
                selected={selectedColor}
                colorNames={stateColors && stateColors.length !== 0 ? stateColors : colorNames}
                colorNumbers={stateNumbers && stateNumbers.length !== 0 ? stateNumbers : colorNumbers}/>
            </div>
          </TransitionHeightAuto>
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(style)(PaletteListView);
