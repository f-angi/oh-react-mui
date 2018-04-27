import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Checkbox, Grid, Paper, Typography } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  }),
});

const DashboardAppointment = (props) => {
  const { time, subject, done } = props.appointment;
  return (
    <Paper className={props.classes.root} elevation={1}>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item xs={3}>
          <Typography variant="body1">{time}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">{subject}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Checkbox checked={done} />
        </Grid>
      </Grid>
    </Paper>);
};

export default withStyles(styles)(DashboardAppointment);
