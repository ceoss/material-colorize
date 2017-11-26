import React from 'react';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import ColorsList from './components/ColorsList/ColorsList'

class App extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="PICK"/>
            <Tab label="CONVERT"/>
            <Tab label="IMAGE"/>
            <Tab label="SWITCHER"/>
            <Tab label="PALETTE"/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={'' === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <ColorsList></ColorsList>
          <div><p>CONVERT</p></div>
          <div><p>IMAGE</p></div>
          <div><p>SWITCHER</p></div>
          <div><p>PALETTE</p></div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
