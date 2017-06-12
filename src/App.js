import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Explore from './components/Explore';
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
            <Route exact path='/home' component={Home}/>
            <Route exact path='/explore' component={Explore}/>
            <Route exact path='/account_settings' component={Oups}/>
            <Route exact path='/sign_out' component={Oups}/>
            <Route path='/' component={Oups}/>
          </Switch>
        </Grid>
        </div>
      </Router>
    )
  }
}

export default App;
