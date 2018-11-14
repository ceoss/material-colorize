// @flow

import React, {ReactChild, useState} from 'react';
import {withStyles} from "@material-ui/core";
import style from "./style";
import type {SetStateType} from "../../../shared/generic";
import {Link, withRouter} from "react-router-dom";

type TabsPropType = {
  title: string,
  tabIndex: 0,
  classes: typeof style,
  child: ReactChild
}

function Tabs(props: TabsPropType) {
  const {
    child,
    location,
    classes
  } = props;
  console.log(props);
  return (
    <Link to={child.props.path}>
      <button className={`${classes.tab} ${location.pathname === child.props.path ? classes.tabActive : ''}`}
              type="button">
        {React.cloneElement(child.props.tabIcon, {className: classes.tabIcon})}
        {child.props.tabLabel}
      </button>
    </Link>
  );
}

export default withStyles(style)(withRouter(Tabs));
