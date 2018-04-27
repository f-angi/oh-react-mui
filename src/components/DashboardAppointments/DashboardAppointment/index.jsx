import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Checkbox, Grid, Paper, Typography } from 'material-ui';

const DashboardAppointment = (props) => {
  const { time, subject, done } = props.appointment;
  return (
    <Grid container>
      <Grid item>
        <Typography variant="body1">{time}</Typography>
      </Grid>
      <Grid item>
        <Paper><Typography variant="body1">{subject}</Typography></Paper>
      </Grid>
      <Grid item>
        <Checkbox checked={done} />
      </Grid>
    </Grid>);
};


export default DashboardAppointment;
