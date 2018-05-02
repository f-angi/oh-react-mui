import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Checkbox, Grid, Paper, Typography } from 'material-ui';

const styles = theme => ({
  appointmentDone: theme.mixins.gutters({
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.light,
  }),
  appointmentIncoming: theme.mixins.gutters({
    paddingTop: 4,
    paddingBottom: 4,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: theme.palette.primary.light,
  }),
});

class DashboardAppointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.appointment.done,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({checked: !this.state.checked});
  }

  render() {
    const { time, subject } = this.props.appointment;
    const className = this.state.checked ? this.props.classes.appointmentDone : this.props.classes.appointmentIncoming;
    return (
      <Paper className={className} elevation={1}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={3}>
            <Typography variant="body1">{time}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">{subject}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Checkbox checked={this.state.checked} onChange={this.handleChange} />
          </Grid>
        </Grid>
      </Paper>);
  }
}

export default withStyles(styles)(DashboardAppointment);
