// @flow

import React, {useState} from 'react';
import {withStyles} from "@material-ui/core";
import style from "./style";
import Tab from './Tab';
import {BrowserRouter as Router, Route} from "react-router-dom";

type TabsPropType = {
  title: string,
  tabIndex: 0,
  classes: typeof style
}

function Tabs(props: TabsPropType) {
  const {
    children: reactChildren,
    classes
  } = props;
  const children = React.Children.toArray(reactChildren);
  return (
    <Router>

      <div className={classes.tabsDiv}>
        <div className={classes.tabs}>
          {
            children.map(child => <Tab key={child.props.tabLabel} child={child}/>)
          }
          <div className={`${classes.tabSideBorder} grow`}/>
        </div>
        <div className={classes.bodyDiv}>
          {
            children.map((child, i) =>
              <Route exact path={child.props.path} key={child.props.tabLabel} component={({match}) =>
                <div className={match.path === child.props.path ? "overflowAuto full-height" : "hideOverflow"}
                     style={match.path === child.props.path ? {} : {height: 0}}>
                  {child}
                </div>

              }/>
            )
          }
        </div>
      </div>
    </Router>
  );
}

export default withStyles(style)(Tabs);
