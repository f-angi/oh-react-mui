import React from 'react';

import { withStyles } from 'material-ui/styles';
import DashboardMaterial from './DashboardMaterial';
import { AppBar, Button, Grid, Paper, Tab, Tabs } from 'material-ui';

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
  <Paper elevation={1}>
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
);

export default withStyles(styles)(DashboardMaterials);
