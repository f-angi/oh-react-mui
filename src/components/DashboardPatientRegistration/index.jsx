import React from 'react';

import DashboardSection from '../DashboardSection';
import { withStyles } from 'material-ui/styles';
import Calendar from 'material-ui-pickers/DatePicker/Calendar';
import moment from 'moment';
import {Button, Grid, Paper, Typography} from 'material-ui';
import KeyboardArrowLeft from '@material-ui/icons/es/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/es/KeyboardArrowRight';
import AccountCircle from "@material-ui/icons/es/AccountCircle";

const styles = (theme) => {};

const DashboardRegistration = props => (
  <DashboardSection title="Register new patient">
    <Grid container direction="column" justify="space-between" alignItems="center" spacing={40}>
      <Grid item xs={9}>
        <AccountCircle style={{ fontSize: 100 }} color="primary" />
      </Grid>
      <Grid item xs={6}>
        <Button variant="raised" size="large">Register a new patient</Button>
      </Grid>
    </Grid>
  </DashboardSection>
);

export default withStyles(styles)(DashboardRegistration);
