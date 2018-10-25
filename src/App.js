import React from 'react';
import Tabs from './components/Tabs';
import PalleteListView from './views/PalleteListView';
import ConvertColorView from "./views/ConvertColorView";
import ImageExtractView from "./views/ImageExtractView";

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

  handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    this.handleChangeIndex(value);
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
      <React.Fragment>
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
        </div>
        <Tabs handleChangeIndex={this.handleChangeIndex}
              handleTabChange={this.handleTabChange}
              tabIndex={this.state.tabIndex}
              title="Title">
          <PalleteListView tabLabel="Pick"/>
          <ConvertColorView tabLabel="Convert"/>
          <ImageExtractView tabLabel="Image"/>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default App;
