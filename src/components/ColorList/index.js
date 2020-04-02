// @flow
/*
 * This component should list the colors that are called in
 */

import React from "react";
import type {SelectedColor} from "../../shared/colors";
import {colors, mainColorNumber} from "../../shared/colors";
import Color from "../Color";
import {withStyles} from "@material-ui/core";
import style from "./style";

type ColorListPropType = {
  colorNames?: string[],
  colorNumbers?: string[],
  classes?: typeof style,
  selected: SelectedColor,
  select: (val: SelectedColor) => void
}

function ColorList(props: ColorListPropType) {
  const {colorNumbers, colorNames, classes, selected, select} = props;
  return (
		<div className="full-height full-width" role="menu">
			{selected && (!colorNames.includes(selected.colorName) || !colorNumbers.includes(selected.colorNumber)) && (
				<Color
					className={classes.colorPad}
					isSelected={true}
					testid="selected-color"
					color={colors[selected.colorName][selected.colorNumber]}
					select={select}
					colorName={selected.colorName}
					number={selected.colorNumber}
				/>
			)}
			{colorNames.map(colorName => (
				<React.Fragment key={colorName}>
					{colorNumbers.includes(mainColorNumber) && (
						<Color
							className={classes.colorPad}
							testid="colorListItem"
							isSelected={selected.colorName === colorName && selected.colorNumber === mainColorNumber}
							color={colors[colorName][mainColorNumber]}
							select={select}
							colorName={colorName}
							number={mainColorNumber}
						/>
					)}
					{colorNumbers
						.filter(number => number !== mainColorNumber)
						.map(number => (
							<Color
								key={`${colorName}${number}`}
								testid="colorListItem"
								className={classes.colorPad}
								isSelected={selected.colorName === colorName && selected.colorNumber === number}
								color={colors[colorName][number]}
								colorName={colorName}
								select={select}
								number={number}
							/>
						))}
				</React.Fragment>
			))}
		</div>
  );
}

export default withStyles(style)(ColorList);
