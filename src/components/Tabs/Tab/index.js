// @flow

import React, {ReactChild, useState} from 'react';
import {withStyles} from "@material-ui/core";
import style from "./style";
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
  return (
    <div className={location.pathname === child.props.path ? classes.tabDivActive : ''}>
      <Link to={child.props.path}>
        <button className={`${classes.tab} bold uppercase`}
                type="button">
          {React.cloneElement(child.props.tabIcon, {className: classes.tabIcon})}
          {child.props.tabLabel}
        </button>
      </Link>
    </div>
  );
}

export default withStyles(style)(withRouter(Tabs));
