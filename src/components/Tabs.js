// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import MaterialTabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
import SwipeableViews from "react-swipeable-views";

type TabsPropType = {
  title: string,
  tabIndex: 0,
  handleChangeIndex: (tabIndex: number) => void,
  handleTabChange: (event: React.ChangeEvent<{}>, value: number) => void
}

function Tabs(props: TabsPropType) {
  const {
    tabIndex,
    children: reactChildren,
    handleChangeIndex,
    handleTabChange,
    title
  } = props;
  const children = React.Children.toArray(reactChildren);
  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
        <MaterialTabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {
            children.map(child => <Tab key={child.props.tabLabel} label={child.props.tabLabel}/>)
          }
        </MaterialTabs>
      </AppBar>
      <SwipeableViews
        axis={'' === 'rtl' ? 'x-reverse' : 'x'}
        index={tabIndex}
        onChangeIndex={handleChangeIndex}
      >
        {
          children.map((child, i) =>
            <div key={child.props.tabLabel}
                 style={tabIndex === i ? {} : {height: 0}}>
              {child}
            </div>
          )
        }
      </SwipeableViews>
    </React.Fragment>
  );
}

export default Tabs;