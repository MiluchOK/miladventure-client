import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import MainWindow from './components/MainWindow'
import NavBar from './components/NavBar';
import Oups from './components/Oups';
import {
  BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
        <Grid>
          <Switch>
            <Route exact path='/explore' component={Oups}/>
            <Route exact path='/account_settings' component={Oups}/>
            <Route exact path='/sign_out' component={Oups}/>
            <Route path='/' component={MainWindow}/>
          </Switch>
        </Grid>
        </div>
      </Router>
    )
  }
}

export default App;
