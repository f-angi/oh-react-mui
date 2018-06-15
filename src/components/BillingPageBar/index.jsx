import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const BillingPageBar = () => (
  <div>
    <Grid container alignItems="center" spacing={8}>
      <Grid item>
        <Typography variant="subheading">Home / Billing page</Typography>
      </Grid>
    </Grid>
    <br />
    <Typography variant="headline" style={{ float: 'left' }}>Billing page</Typography>
    <br />
    <br />
    <Divider />
  </div>
);

export default withStyles(styles)(BillingPageBar);
