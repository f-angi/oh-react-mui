import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import theme from './theme';
import './App.css';
import Dashboard from './scenes/Dashboard/index';

const App = () => (
  <MuiPickersUtilsProvider utils={MomentUtils}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Dashboard username="Dr. House" hospitalName="Hospital St. Democrito" />
    </MuiThemeProvider>
  </MuiPickersUtilsProvider>
);

export default App;
