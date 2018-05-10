import React from 'react';

import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from 'material-ui/styles';
import { Button, Grid } from 'material-ui';
import DashboardSection from '../DashboardSection';

const styles = (theme) => {
};

const DashboardRegistration = props => (
  <DashboardSection title="Register new patient">
    <Grid container direction="column" justify="space-between" alignItems="center" spacing={40}>
      <Grid item xs={12}>
        <AccountCircle style={{ fontSize: 100 }} color="primary" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="raised" size="large" color="secondary">Register a new patient</Button>
      </Grid>
    </Grid>
  </DashboardSection>
);

export default withStyles(styles)(DashboardRegistration);
