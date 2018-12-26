// @flow

import React from 'react';
import {withStyles} from "@material-ui/core";
import style from "./style";
import Tab from './Tab';
import {BrowserRouter as Router, Route} from "react-router-dom";

type TabsPropType = {
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
        <div className={classes.tabPlaceholder}/>
        <div className={classes.tabs}>
          {
            children.map(child => <Tab key={child.props.tabLabel} child={child}/>)
          }
          <div className={`${classes.tabSideBorder} grow`}/>
        </div>
        <div className="overflowAuto relative">
          {
            children.map((child) =>
              <Route exact path={child.props.path} key={child.props.tabLabel} children={({match}) =>
                <div className={`${classes.bodyDiv} ${match ? 'topLeft' : `hideOverflow ${classes.offScreen}`}`}>
                <div className={`full-height ${child.props.showOverflow ? '' : 'hideOverflow'}`}>
                  {child}
                </div>
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
