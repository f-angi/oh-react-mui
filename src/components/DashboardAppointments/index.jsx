import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import DashboardSection from '../DashboardSection';
import DashboardAppointment from './DashboardAppointment';
import SelectTimeRange from '../../components/SelectTimeRange';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
  }),
  appointments: theme.mixins.gutters({
    marginBottom: theme.spacing.unit * 3,
  }),
});

const appointments = [
  {
    time: '7.00 am',
    subject: 'Daily briefing with the staff',
    done: true,
  },
  {
    time: '9.30 am',
    subject: 'Meeting with Dr. Ford',
    done: true,
  },
  {
    time: '3.00 pm',
    subject: 'Daily visits',
    done: false,

  },
];

const DashboardAppointments = props => (
  <DashboardSection title="Appointments" controlComponent={<SelectTimeRange />}>
    <Paper elevation={0} className={props.classes.appointments}>
      {appointments.map((appointment, index) => <DashboardAppointment key={index} appointment={appointment} />)}
    </Paper>
    <Divider />
    <br />
    <Typography variant="title" color="textSecondary"><strong>Summary</strong></Typography>
    <Grid container spacing={40}>
      <Grid item xs={4}>
        <Paper className={props.classes.root} elevation={0}>
          <Typography variant="headline" component="h3">
            8
          </Typography>
          <Typography component="p">
            patients<br />visited
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={props.classes.root} elevation={0}>
          <Typography variant="headline" component="h3">
            15
          </Typography>
          <Typography component="p">
            appointments<br />remaining
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={props.classes.root} elevation={0}>
          <Typography variant="headline" component="h3">
            91%
          </Typography>
          <Typography component="p">
            healings
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </DashboardSection>
);

export default withStyles(styles)(DashboardAppointments);
