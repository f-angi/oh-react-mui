import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import theme from './theme';
import Dashboard from './scenes/Dashboard';
import Login from './scenes/Login';
import ColleguesDB from './scenes/ColleguesDB';
import './App.css';

const App = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
   <Router basename="/" hashType="noslash">   
    <MuiThemeProvider theme={createMuiTheme(theme)}>
    <LastLocationProvider>
          <Route exact path="/" rendercomponent={Login}/>                      
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/collegues-db" component={ColleguesDB}/>
        </LastLocationProvider>      
    </MuiThemeProvider>
    </Router>
  </MuiPickersUtilsProvider>
);

export default App;
