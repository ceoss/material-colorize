import React, {Component} from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import ColorsList from './components/ColorsList/ColorsList'

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar></HeaderBar>
        <ColorsList></ColorsList>
      </div>
    );
  }
}

export default App;
