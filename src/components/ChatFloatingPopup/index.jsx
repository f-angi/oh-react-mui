import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: 25,
    right: 25,
    width: 160,
    padding: 10,
    border: '1px solid',
    borderColor: theme.palette.secondary.dark,
  },
  icon: {
    fontSize: 18,
  },
  iconButton: {
    height: 26,
    width: 26,
  },
});

const ChatFloatingPopup = props => (
  <Grid container justify="flex-end">
    <Grid item xs={11} />
    <Grid item xs={1}>
      <Paper elevation={12} className={props.classes.root}>
        <Grid container justify="space-around" alignItems="center">
          <Grid item xs={10}>
            <Typography variant="body1">Chat (8)</Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton className={props.classes.iconButton}>
              <OpenInNewIcon className={props.classes.icon} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(ChatFloatingPopup);
