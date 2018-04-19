import React from 'react';

import { withStyles } from 'material-ui/styles';
import DashboardMaterial from './DashboardMaterial';
import { AppBar, Button, Grid, Paper, Tab, Tabs, Typography } from 'material-ui';

const styles = theme => ({});

const materials = [
  {
    name: 'EROTRICIMINA',
    remaining: 150,
    weeksRefueling: 2,
  },
  {
    name: 'AMOXICILLINA',
    remaining: 1200,
    weeksRefueling: 4,
  },
  {
    name: 'CLARITROMICINA',
    remaining: 200,
    weeksRefueling: 4,
  },
];


const DashboardMaterials = props => (
  <div>
    <Typography variant="body2" color="textSecondary">MATERIALS ARE RUNNING OUT</Typography>
    <Paper elevation={8}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Tabs
          indicatorColor="primary"
          fullWidth
          value={0}
        >
          <Tab label="Running out drugs" />
          <Tab label="Running out nursing materials" />
        </Tabs>
      </AppBar>
      {materials.map(material => (<DashboardMaterial material={material} />))}
      <Grid container justify="center">
        <Grid item>
          <Button color="primary">See all the materials</Button>
        </Grid>
      </Grid>
      <br />
    </Paper>
  </div>
);

export default withStyles(styles)(DashboardMaterials);
