import React from 'react';

import DashboardSection from '../DashboardSection';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from 'material-ui/styles';
import { Button, Grid } from 'material-ui';

const styles = (theme) => {
};

const DashboardSearch = props => (
  <DashboardSection title="Search for patients">
    <Grid container direction="column" justify="space-between" alignItems="center" spacing={40}>
      <Grid item xs={9}>
        <SearchIcon style={{ fontSize: 100 }} color="primary" />
      </Grid>
      <Grid item xs={6}>
        <Button variant="raised" size="large" color="secondary">Search for patients</Button>
      </Grid>
    </Grid>
  </DashboardSection>
);

export default withStyles(styles)(DashboardSearch);
