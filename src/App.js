import React, { Component } from 'react';
import NavBar from './components/NavBar';
import ExploreWindow from './components/ExploreWindow';
import Oups from './components/Oups';
import AccountSettingsWindow from './components/AccountSettingsWindow';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      main: 'explore'
    }
  }

  getMainWindow(){
    console.log(this.state.main);
    switch(this.state.main){
      case 'explore':
        return <ExploreWindow />
        break;
      case 'account_settings':
        return <AccountSettingsWindow />
        break;
      default:
        return <Oups />
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.getMainWindow()}
      </div>
    );
  }
}

export default App;
