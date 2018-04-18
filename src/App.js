import React, { Component } from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from 'material-ui';
import theme from './theme';
import Dashboard from './scenes/Dashboard/index';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <Dashboard />
      </MuiThemeProvider>
    );
  }
}

export default App;
