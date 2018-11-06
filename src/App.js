import React from 'react';
import Tabs from './components/Tabs';
import PalleteListView from './views/PalleteListView';
import ConvertColorView from "./views/ConvertColorView";
import ImageExtractView from "./views/ImageExtractView";
import Colorize from '@material-ui/icons/ColorizeOutlined';
import CompareArrows from '@material-ui/icons/CompareArrowsOutlined';
import Palette from '@material-ui/icons/PaletteOutlined';

class App extends React.Component<{}, {
  tabIndex: number,
  scrim: boolean,
  format: string
}> {
  state = {
    scrim: false,
    format: 'hex'
  };

  convertColors = null;

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
        <Tabs title="Title">
          <PalleteListView tabLabel="Pick" tabIcon={<Colorize/>}/>
          <ConvertColorView tabLabel="Match" tabIcon={<CompareArrows/>}/>
          <ImageExtractView tabLabel="Image" tabIcon={<Palette/>}/>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default App;
