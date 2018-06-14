import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import LoginCredentials from '../../components/LoginCredentials';
import LoginSummary from '../../components/LoginSummary'

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" alignItems="stretch">
        <Grid item xs={12} lg={10}>
          <Paper elevation={4} className={this.props.classes.appFramePaper}>
            <Grid container direction="row" spacing={24} justify="center">
              <Grid item>
                <LoginCredentials />
              </Grid>
              <Grid item>
                <LoginSummary
                  inPatients="14"
                  inPatientsToday="2"
                  inPatientsMonth="12"
                  inBor="46%"
                  inAvgLos="3.5"
                  inTotBor="68%"
                  inAvgLos2="4.7"

                  outPatients="14"
                  outPatientsToday="2"
                  outPatientsMonth="12"
                  outBor="46%"
                  outAvgLos="3.5"
                  outTotBor="68%"
                  outAvgLos2="4.7"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

    );
  }
}

export default withStyles(styles)(Login);