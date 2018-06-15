import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Badge, Grid, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';
import HeaderSearch from '../HeaderSearch';

const styles = theme => ({
  marginTop: {
    background: theme.palette.background.contentFrame,
    padding: theme.spacing.unit * 4,
  },
});

const HeaderNotificationArea = props => (
  <Grid container alignItems="center" justify="flex-end" spacing={0}>
    <Grid item>
      <HeaderSearch />
    </Grid>
    <Grid item>
      <IconButton><Badge color="primary" badgeContent={4}><NotificationsIcon /></Badge></IconButton>
    </Grid>
    <Grid item>
      <IconButton><Badge color="primary" badgeContent={8}><ChatIcon /></Badge></IconButton>
    </Grid>
    <Grid item>
      <IconButton><Badge color="primary" badgeContent={8}><EventNoteIcon /></Badge></IconButton>
    </Grid>
    <Grid item>
      <IconButton><Badge color="primary" badgeContent={8}><SettingsIcon /></Badge></IconButton>
    </Grid>
  </Grid>
);

export default withStyles(styles)(HeaderNotificationArea);
