import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import HeaderLinks from './HeaderLinks';
import HeaderNotificationArea from './HeaderNotificationArea';
import HeaderSearch from './HeaderSearch';

const styles = theme => ({
  header: {
    padding: theme.spacing.unit * 2,
    background: 'transparent',
    marginTop: 0,
  },
  extraHeight: {
    [theme.breakpoints.up('lg')]: {
      height: 120,
    },
  },
  toolbar: {
    padding: 100,
  },
});


const Header = (props) => {
  const { username, hospitalName, classes } = props;

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={10}>
        <AppBar position="static" className={classes.extraHeight} elevation={4} color="secondary">
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={2}>
                <img alt="Open Hospital" src="../../logo_OH_small.png" />
              </Grid>
              <Grid item xs={10}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography variant="subheading">{props.hospitalName}</Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="headline">Welcome back, <strong>{props.username}</strong>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <HeaderNotificationArea />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container alignItems="center">
                      <Grid item xs={7}>
                        <HeaderLinks links={['Dashboard', 'Patient database', 'Colleagues database', 'Pharmacy', 'Ward', 'Billing', 'News']} />
                      </Grid>
                      <Grid item xs={1}>&nbsp;</Grid>
                      <Grid item xs={4}>
                        <HeaderSearch />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Header);

