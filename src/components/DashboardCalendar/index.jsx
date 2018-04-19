import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Paper, Typography } from 'material-ui';
import Calendar from 'material-ui-pickers/DatePicker/Calendar';
import moment from 'moment';

const styles = theme => ({});

const DashboardCalendar = props => (
  <div>
    <Typography variant="body2" color="textSecondary">CALENDAR</Typography>
    <Paper elevation={8}>
      <Calendar
        date={moment('2018-05-12')}
        autoOk={false}
        cancelLabel={false}
        firstDayOfWeek={1}
        mode="portrait"
        open
      />
    </Paper>
  </div>
);

export default withStyles(styles)(DashboardCalendar);
