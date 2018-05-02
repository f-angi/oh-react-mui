import React from 'react';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import HeaderLinks from './HeaderLinks';
import HeaderNotificationArea from './HeaderNotificationArea';
import HeaderSearch from './HeaderSearch';
import ModeEditIcon from '@material-ui/icons/ModeEdit';
import { IconButton } from 'material-ui';

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
    padding: 10,
  },
});


const Header = (props) => {
  const { username, hospitalName, classes } = props;
  const editModeIconStyle = { fontSize: 15 };
  const editModeButtonStyle = { height: 22, width: 22 };

  return (
    <AppBar position="static" className={classes.extraHeight} elevation={4} color="secondary">
      <Toolbar className={classes.toolbar}>
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
                        <Grid container alignItems="flex-end">
                          <Grid item>
                            <Typography variant="body1">{props.hospitalName}&nbsp;</Typography>
                          </Grid>
                          <Grid item>
                            <IconButton style={editModeButtonStyle}>
                              <ModeEditIcon style={editModeIconStyle} />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subheading">Welcome
                                                    back, <strong>{props.username}</strong>
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
                    <HeaderLinks
                      links={['Dashboard', 'Patient database', 'Colleagues database', 'Pharmacy', 'Ward', 'Billing', 'News']}
                    />
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
  );
};

export default withStyles(styles)(Header);

