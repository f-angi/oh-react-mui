import React from 'react';

import DashboardSection from '../DashboardSection';
import { withStyles } from 'material-ui/styles';
import Calendar from 'material-ui-pickers/DatePicker/Calendar';
import moment from 'moment';
import { Grid, Paper, Typography } from 'material-ui';
import KeyboardArrowLeft from '@material-ui/icons/es/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/es/KeyboardArrowRight';

const styles = (theme) => {
  const t = theme;
  return ({
    today: {
      textAlign: 'center',
      height: '100%',
      backgroundColor: theme.palette.secondary.dark,
    },
    calendar: {
      // backgroundColor: theme.palette.secondary.dark,
    },
  });
};

const DashboardCalendar = props => (
  <DashboardSection title="Calendar">
    <Grid container justify="space-between" spacing={40}>
      <Grid item xs={5}>
        <Paper elevation={0} className={props.classes.today}>
          <br /><br /><br />
          <Typography variant="display1">TODAY</Typography>
          <br />
          <Typography variant="title">MAY</Typography>
          <Typography variant="title">18</Typography>
          <Typography variant="title">Friday</Typography>
          <br /> <br />
          <Typography variant="title">2018</Typography>
        </Paper>
      </Grid>
      <Grid item xs={7} className={props.classes.calendar}>
        <Calendar
          date={moment('2018-05-12')}
          autoOk={false}
          cancelLabel={false}
          firstDayOfWeek={1}
          mode="portrait"
          leftArrowIcon={<KeyboardArrowLeft />}
          rightArrowIcon={<KeyboardArrowRight />}
          open
        />
      </Grid>
    </Grid>
  </DashboardSection>
);

export default withStyles(styles)(DashboardCalendar);
