import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PalleteListView from './views/PalleteListView';
import ConvertColorView from "./views/ConvertColorView";

class App extends React.Component<{}, {
  tabIndex: number,
  scrim: boolean,
  format: string
}> {
  state = {
    tabIndex: 0,
    scrim: false,
    format: 'hex'
  };

  convertColors = null;

  handleChangeIndex = (tabIndex: number) => {
    this.setState({tabIndex});
  };

  toggleScrim = () => {
    this.setState(prevState => {
      return {scrim: !prevState.scrim}
    });
  };

  closePicker = () => {
    if (this.convertColors) {
      this.convertColors.handleClick();
      console.log(this.convertColors)
    }
  };

  render() {
    return (
      <div>
        {
          this.state.scrim ?
            <div style={{
              height: '100vh',
              width: '100vw',
              position: 'fixed',
              top: '0',
              left: '0'
            }} onClick={this.closePicker()}/> :
            null
        }
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Title
            </Typography>
          </Toolbar>
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleChangeIndex}
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
          index={this.state.tabIndex}
          onChangeIndex={this.handleChangeIndex}
        >
          <PalleteListView/>
          <ConvertColorView/>
          <div><p>IMAGE</p></div>
          <div><p>SWITCHER</p></div>
          <div><p>PALETTE</p></div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
