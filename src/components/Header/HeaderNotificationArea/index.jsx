import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Badge, Grid } from 'material-ui';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';

const styles = theme => ({
  marginTop: {
    background: theme.palette.background.contentFrame,
    padding: theme.spacing.unit * 4,
  },
});

const HeaderNotificationArea = props => (
  <Grid container justify="flex-end" spacing={24}>
    <Grid item>
      <Badge color="primary" badgeContent={4}><NotificationsIcon /></Badge>
    </Grid>
    <Grid item>
      <Badge color="primary" badgeContent={8}><ChatIcon /></Badge>
    </Grid>
    <Grid item>
      <Badge><EventNoteIcon /></Badge>
    </Grid>
    <Grid item>
      <Badge><SettingsIcon /></Badge>
    </Grid>
  </Grid>
);

export default withStyles(styles)(HeaderNotificationArea);
