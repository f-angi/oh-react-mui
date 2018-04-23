import React from 'react';

import DashboardSection from '../DashboardSection';
import { withStyles } from 'material-ui/styles';
import Calendar from 'material-ui-pickers/DatePicker/Calendar';
import moment from 'moment';
import { Grid, Paper, Typography } from 'material-ui';

const styles = (theme) => {
  const t = theme;
  return ({
    today: {
      textAlign: 'center',
      // backgroundColor: theme.palette.primary.light,
    },
    calendar: {
      // backgroundColor: theme.palette.secondary.dark,
    },
  });
};

const DashboardCalendar = props => (
  <DashboardSection title="Calendar">
    <Grid container justify="space-between" spacing={40}>
      <Grid item xs={5} className={props.classes.today}>
        <Typography variant="title">TODAY</Typography>
        <br />
        <Typography variant="title">MAY</Typography>
        <Typography variant="title">18</Typography>
        <br />
        <Typography variant="title">2016</Typography>
      </Grid>
      <Grid item xs={7} className={props.classes.calendar}>
        <Calendar
          date={moment('2018-05-12')}
          autoOk={false}
          cancelLabel={false}
          firstDayOfWeek={1}
          mode="portrait"
          open
        />
      </Grid>
    </Grid>
  </DashboardSection>
);

export default withStyles(styles)(DashboardCalendar);
