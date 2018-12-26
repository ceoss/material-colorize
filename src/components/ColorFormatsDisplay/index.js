// @flow

import React, {useState, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import GenericFormatDisplay from "../GenericFormatDisplay";
import {withStyles} from "@material-ui/core";
import style from "./style";
import {formats} from "../../shared/colors";
import tinycolor from 'tinycolor2';
import {getFormatString, getFormatValue} from "../../shared/convert";
import CopyIcon from "../CopyIcon";
import withWidth from "@material-ui/core/withWidth";
import ButtonBase from '@material-ui/core/ButtonBase';
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import {useIsSmall} from "../../shared/generic-hooks";

type ColorFormatDisplayPropType = {
  classes?: typeof style,
  color: string,
  className?: string,
  allowCopy?: boolean,
  appendIcon?: React.ComponentType<any>,
  allowedIconIndexes?: number[],
  width: Breakpoint
}

function ColorFormatsDisplay(props: ColorFormatDisplayPropType) {
  const {color, classes, className = '', allowCopy = false, appendIcon, allowedIconIndexes, width} = props,
    tinyColorColor = tinycolor(color);
  const [showAll, setShowAll] = useState(false);
  const [shownFormats, setShownFormats] = useState(formats);
  const isSmall = useIsSmall(width);

  useEffect(() => {
    setShowAll(false);
  }, [isSmall]);

  useEffect(() => {
    setShownFormats(!isSmall || (isSmall && showAll) ? formats : [formats[0]]);
  }, [isSmall, showAll]);

  return (
    <Grid container direction="column" className={className} wrap="nowrap">
      {
        shownFormats.map((format, i) => {
          const formatVal = getFormatValue(tinyColorColor, format);
          const copyVal = getFormatString(tinyColorColor, format);
          const displayVal = typeof formatVal.data === 'string' ? [formatVal.formatted] : formatVal.orderOfKeys.map(key => formatVal.formatted[key]);
          return <GenericFormatDisplay
            formatName={format}
            key={format}
            displayVal={displayVal}
            appendIcon={
              allowCopy ? <CopyIcon className={classes.copyIcon} copyVal={copyVal}/> :
                !allowedIconIndexes || (Array.isArray(allowedIconIndexes) && allowedIconIndexes.includes(i)) ? appendIcon :
                  appendIcon
            }/>
        })
      }
      {
        isSmall &&
        <ButtonBase className={`${classes.dropdownButton} full-width total-border`} focusRipple
                    onClick={() => setShowAll(!showAll)}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <ArrowDropDown className={classes.dropdownArrow}
                           style={showAll ? {transform: 'rotate(180deg)'} : {}}/>
          </Grid>
        </ButtonBase>
        }
    </Grid>
  )
}

export default withStyles(style)(withWidth()(ColorFormatsDisplay));
