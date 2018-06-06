import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Divider, Grid, Typography } from 'material-ui';
import HomeIcon from '@material-ui/icons/Home';

const styles = theme => ({});

const WelcomeBar = props => (
  <div>
    <Grid container alignItems="center" spacing={8}>
      <Grid item>
        <HomeIcon />
      </Grid>
      <Grid item>
        <Typography variant="subheading">Home</Typography>
      </Grid>
    </Grid>
    <br />
    <Typography variant="headline">Welcome Dr. House</Typography>
    <Divider />
    <br />
  </div>
);

export default withStyles(styles)(WelcomeBar);
