import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ModeEditIcon from '@material-ui/icons/ModeEdit';
import { Hidden, IconButton } from '@material-ui/core';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from "@material-ui/core/es/index";

import HeaderLinks from './HeaderLinks';
import HeaderLinksHamburger from './HeaderLinksHamburger';
import HeaderNotificationArea from './HeaderNotificationArea';

const styles = theme => ({
  header: {
    padding: theme.spacing.unit * 2,
    background: 'transparent',
    marginTop: 0,
  },
  extraHeight: {
    // [theme.breakpoints.up('lg')]: {
    //   height: 120,
    // },
  },
  toolbar: {
    // paddingLeft: 10,
    // paddingRight: 10,
    height: '100%',
  },
  gridContainerFirstRow: {
    height: 80,
  },
  gridItemLogo: {
    paddingRight: 10,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    //this.handleClose = this.handleClose.bind(this);
    this.handleCloseSave = this.handleCloseSave.bind(this);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  handleCloseSave = () => {
    this.setState({ open: !this.state.open });
    // Submit event
  };

  render() {
    const { username, hospitalName, classes } = this.props;
    const editModeIconStyle = { fontSize: 15 };
    const editModeButtonStyle = { height: 22, width: 22 };

    return (
      <AppBar position="static" className={classes.extraHeight} elevation={4} color="secondary">
        <Toolbar className={classes.toolbar} disableGutters>
          <Grid container direction="column" alignItems="stretch" justify="space-between">
            <Grid item xs={12}>
              <Grid container alignItems="center" justify="space-between" className={classes.gridContainerFirstRow}>
                <Grid item xs={12} md={6}>
                  <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                      <Grid container alignItems="center">
                        <Grid item className={classes.gridItemLogo}>
                          <img alt="Open Hospital" src="./logo_OH_smaller.png" />
                        </Grid>
                        <Grid item>
                          <Grid container direction="column">
                            <Grid item>
                              <Grid container alignItems="flex-end">
                                <Grid item>
                                  <Typography variant="body1">{hospitalName}&nbsp;</Typography>
                                </Grid>
                                <Grid item>
                                  <IconButton onClick={this.handleClick} style={editModeButtonStyle}>
                                    <ModeEditIcon style={editModeIconStyle} />
                                  </IconButton>
                                  <Dialog
                                    disableBackdropClick={true}
                                    disableEscapeKeyDown={true}
                                    open={this.state.open}
                                    onClose={this.handleClick}
                                    aria-labelledby="form-dialog-title"
                                  >
                                    <DialogTitle id="form-dialog-title">Modify the name of hospital</DialogTitle>
                                    <DialogContent>
                                      <TextField
                                        autoFocus
                                        margin="dense"
                                        id="hospital-name"
                                        label="Hospital name"
                                        type="text"
                                        fullWidth
                                      />
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={this.handleClick} color="primary">
                                        Cancel
                                      </Button>
                                      <Button onClick={this.handleCloseSave} color="primary">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid item>
                              <Typography variant="subheading">Welcome back, <strong>{username}</strong>
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Hidden mdUp>
                      <Grid item>
                        <HeaderLinksHamburger
                          links={['Dashboard', 'Patient database', 'Colleagues database', 'Pharmacy', 'Ward', 'Billing', 'News']} />
                      </Grid>
                    </Hidden>
                  </Grid>
                </Grid>
                <Hidden smDown>
                  <Grid item xs={12} sm={6}>
                    <HeaderNotificationArea />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
            <Hidden smDown>
              <Grid item md={12}>
                <HeaderLinks
                  links={['Dashboard', 'Patient database', 'Colleagues database', 'Pharmacy', 'Ward', 'Billing', 'News']}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);

