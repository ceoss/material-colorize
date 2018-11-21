// @flow

import React, {useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import ColorList from '../../components/ColorList';
import type {SelectedColor} from "../../shared/colors";
import {colorNames, colorNumbers, colors, mainColorNumber} from '../../shared/colors';
import type {SetStateType} from "../../shared/generic";
import ColorFormatsDisplay from "../../components/ColorFormatsDisplay";
import style from "./style";
import {withStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import {useElementSize} from "../../shared/generic-hooks";
import Color from "../../components/Color";

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
        {/*<GenericMultiSelect handleChange={event => setColors(event.target.value)} value={stateColors}*/}
        {/*inputId="colors-selector"*/}
        {/*options={colorNames} label="Colors"/>*/}
        {/*<GenericMultiSelect handleChange={event => setNumbers(event.target.value)} value={stateNumbers}*/}
        {/*inputId="numbers-selector"*/}
        {/*options={colorNumbers} label="Numbers"/>*/}
        <div className="grow relative" ref={contentEl}>
          <div
            style={{height: showFilter ? `${contentSize ? contentSize.height + 'px' : ''}` : '0px'}}
            className={`absolute full-width topZero leftZero hideOverflow ${classes.transitionHeight}`}>
            <Grid style={{height: `${contentSize ? contentSize.height + 'px' : ''}`}}
                  container direction="row" wrap="nowrap">
              <div className="overflowAuto full-height grow">
                {
                  colorNames.map(colorName => <div key={colorName}>
                    <Color isSelected={stateColors.includes(colorName)}
                           color={colors[colorName][mainColorNumber]}
                           select={({colorName}) => {
                             if (!stateColors.includes(colorName)) {
                               setColors([
                                 ...stateColors,
                                 colorName
                               ])
                             } else {
                               const colorIndex = stateColors.indexOf(colorName);
                               setColors(stateColors.filter((_, i) => i !== colorIndex));
                             }
                           }}
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
                           select={({colorName: colorNum}) => {
                             if (!stateNumbers.includes(colorNum)) {
                               setNumbers([
                                 ...stateNumbers,
                                 colorNum
                               ])
                             } else {
                               const numberIndex = stateNumbers.indexOf(colorNum);
                               setNumbers(stateNumbers.filter((_, i) => i !== numberIndex));
                             }
                           }}
                           colorName={colorNumber}/>
                  </div>)}
              </div>
            </Grid>
          </div>
          <div style={{height: showFilter ? '0px' : `${contentSize ? contentSize.height + 'px' : ''}`}}
               className={`full-width absolute leftZero bottomZero hideOverflow ${classes.transitionHeight}`}>
            <div className="overflowAuto full-height"
                 style={{height: `${contentSize ? contentSize.height + 'px' : ''}`}}>
              <ColorList
                select={setColor}
                selected={selectedColor}
                colorNames={stateColors && stateColors.length !== 0 ? stateColors : colorNames}
                colorNumbers={stateNumbers && stateNumbers.length !== 0 ? stateNumbers : colorNumbers}/>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default withStyles(style)(PaletteListView);
