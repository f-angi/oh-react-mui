import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Header from '../../components/Header';
import WelcomeBar from '../../components/WelcomeBar';
import DashboardPatientRegistration from '../../components/DashboardPatientRegistration';
import DashboardPatientSearch from '../../components/DashboardPatientSearch';
import DashboardMaterials from '../../components/DashboardMaterials';
import DashboardCalendar from '../../components/DashboardCalendar';
import DashboardAppointments from '../../components/DashboardAppointments';
import { Grid, Paper } from 'material-ui';

const styles = theme => ({
  appFramePaper:
      theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.secondary.main,
      }),
});

const AppFrame = props => (
  <Grid container justify="center" alignItems="stretch">
    <Grid item xs={10}>
      <Header username={props.username} hospitalName={props.hospitalName} />
      <Paper elevation={4} className={props.classes.appFramePaper}>
        <WelcomeBar />
        <Grid container>
          <Grid container justify="space-around" spacing={24}>
            <Grid item sm={12} md={6}>
              <DashboardPatientRegistration />
            </Grid>
            <Grid item sm={12} md={6}>
              <DashboardPatientSearch />
            </Grid>
          </Grid>
          <Grid container justify="space-around" spacing={24}>
            <Grid item sm={12} md={6}>
              <DashboardMaterials />
            </Grid>
            <Grid item sm={12} md={6}>
              <Grid container direction="column">
                <Grid item sm={12}>
                  <DashboardCalendar />
                </Grid>
                <Grid item sm={12}>
                  <DashboardAppointments />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>

);

// AppFrame.defaultProps = {
//   classes: {},
//   title: 'HelpDesk',
//   breadcrumbs: [],
//   children: null,
// };
//
// AppFrame.propTypes = {
//   breadcrumbs: PropTypes.arrayOf(PropTypes.any),
//   children: PropTypes.node,
//   classes: PropTypes.objectOf(PropTypes.any),
//   title: PropTypes.string,
// };

export default withStyles(styles)(AppFrame);
