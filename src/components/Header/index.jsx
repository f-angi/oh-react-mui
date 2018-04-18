import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import HeaderLinks from '../../components/HeaderLinks';

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
    padding: 8,
  },
});


const Header = (props) => {
  const { username, hospitalName, classes } = props;

  return (
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={10}>
        <AppBar position="static" className={classes.extraHeight} elevation={0} color="primary">
          <Toolbar className={classes.toolbar}>
            <Grid container justify="center" alignItems="stretch">
              <Grid item xs={2}>
                <img alt="OH" />
              </Grid>
              <Grid item xs={10}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container>
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
                            immagini
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item xs={8}>
                        <HeaderLinks links={['Dashboard', 'Patient database', 'Colleagues database', 'Pharmacy', 'Ward', 'Billing', 'News']} />
                      </Grid>
                      <Grid item xs={4}>
                            search
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


Header.defaultProps = {
  title: 'Home',
  classes: {},
};

Header.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.any),
};

export default withStyles(styles)(Header);

