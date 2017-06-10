import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ExploreWindow from './components/ExploreWindow';
import AccountSettingsWindow from './components/AccountSettingsWindow';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      main: <ExploreWindow />
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.main}
      </div>
    );
  }
}

export default App;
