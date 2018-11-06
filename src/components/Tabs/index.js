// @flow

import React, {useState} from 'react';
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";
import style from "./style";

type TabsPropType = {
  title: string,
  tabIndex: 0,
  classes: { [key: string]: string }
}

function Tabs(props: TabsPropType) {
  const [tabIndex, setTabIndex] = useState(0);
  const {
    children: reactChildren,
    classes
  } = props;
  const children = React.Children.toArray(reactChildren);
  return (
    <div className={classes.tabsDiv}>
      <div className={classes.tabs}>
        {
          children.map((child, i) =>
            <div key={child.props.tabLabel}
                 className={`${classes.tab} ${tabIndex === i ? classes.tabActive : ''}`}
                 onClick={() => setTabIndex(i)}>
                {React.cloneElement(child.props.tabIcon, { className: classes.tabIcon })}
              <Typography className={classes.tabText} type="headline2">{child.props.tabLabel}</Typography>
            </div>
          )
        }
        <div className={`${classes.tabRightBorder} grow`}/>
      </div>
      <div className={classes.bodyDiv}>
        {
          children.map((child, i) =>
            <div key={child.props.tabLabel}
                 className={tabIndex === i ? "overflowAuto full-height" : "hideOverflow"}
                 style={tabIndex === i ? {} : {height: 0}}>
              {child}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default withStyles(style)(Tabs);
