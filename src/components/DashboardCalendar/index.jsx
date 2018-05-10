import React from 'react';

import DashboardSection from '../DashboardSection';
import { withStyles } from 'material-ui/styles';
import Calendar from 'material-ui-pickers/DatePicker/Calendar';
import moment from 'moment';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Grid, Paper, Typography } from 'material-ui';


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

const DashboardCalendar = (props) => {
  const today = moment();
  return (
    <DashboardSection title="Calendar">
      <Grid container justify="space-between" spacing={40}>
        <Grid item xs={5}>
          <Paper elevation={0} className={props.classes.today}>
            <br /><br /><br />
            <Typography variant="display1">TODAY</Typography>
            <br />
            <Typography variant="title">{today.format('MMMM')}</Typography>
            <Typography variant="title">{today.date()}</Typography>
            <Typography variant="title">{today.format('dddd')}</Typography>
            <br /> <br />
            <Typography variant="title">{today.format('YYYY')}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={7} className={props.classes.calendar}>
          <Calendar
            date={moment()}
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
};

export default withStyles(styles)(DashboardCalendar);
