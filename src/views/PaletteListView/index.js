// @flow

import React, {useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import ColorList from '../../components/ColorList';
import type {SelectedColor} from "../../shared/colors";
import {colorNames, colorNumbers, colors, mainColorNumber} from '../../shared/colors';
import type {SetStateType} from "../../shared/generic";
import {immutableToggleArray} from "../../shared/generic";
import ColorFormatsDisplay from "../../components/ColorFormatsDisplay";
import style from "./style";
import {withStyles} from "@material-ui/core";
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import {useElementSize} from "../../shared/generic-hooks";
import Color from "../../components/Color";
import TransitionHeightAuto from "../../components/TransitionHeightAuto";
import Typography from "@material-ui/core/Typography";
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import withWidth from "@material-ui/core/withWidth";

type PaletteListViewPropType = {
  classes?: typeof style,
  width: Breakpoint
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
  const {classes, width} = props;

  return (
    <Grid
      className="full-height"
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      wrap={width === 'sm' || width === 'xs' ? 'wrap' : 'nowrap'}
    >
      <div className={classes.colorFormatDisplay}>
        <ColorFormatsDisplay color={colors[selectedColor.colorName][selectedColor.colorNumber]} allowCopy={true}/>
      </div>
      <Grid
        className="grow full-height full-screen-border no-padding"
        container
        direction="column"
        wrap="nowrap"
      >
          <ButtonBase className={`${classes.dropdownButton} dropdown-button full-width`} focusRipple
                      onClick={() => setShowFilter(!showFilter)}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Typography className="bold">Filters</Typography>
              <ArrowDropDown className={classes.dropdownArrow}
                             style={showFilter ? {transform: 'rotate(180deg)'} : {}}/>
            </Grid>
          </ButtonBase>
        <div className="grow relative" ref={contentEl}>
          <TransitionHeightAuto show={showFilter} position="top" size={contentSize}>
            <Grid className="full-height"
                  container direction="row" wrap="nowrap">
              <div className="overflowAuto full-height grow" role="menu">
                {
                  colorNames.map(colorName => <div key={colorName}>
                    <Color isSelected={stateColors.includes(colorName)}
                           color={colors[colorName][mainColorNumber]}
                           select={({colorName}) => setColors(immutableToggleArray(stateColors, colorName))}
                           colorName={colorName}/>
                  </div>)
                }
              </div>
              <div className={`overflowAuto full-height ${classes.numbersList}`} role="menu">
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
            <div className={`overflowAuto full-height ${classes.colorListDiv}`}>
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

export default withStyles(style)(withWidth()(PaletteListView));
