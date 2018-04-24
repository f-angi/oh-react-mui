import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Header from '../../components/Header';
import WelcomeBar from '../../components/WelcomeBar';
import DashboardPatientRegistration from '../../components/DashboardPatientRegistration';
import DashboardPatientSearch from '../../components/DashboardPatientSearch';
import DashboardMaterials from '../../components/DashboardMaterials';
import DashboardCalendar from '../../components/DashboardCalendar';
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
        <Grid container justify="space-between" spacing={40}>
          <Grid item xs={6}>
              <DashboardPatientRegistration />
          </Grid>
            <Grid item xs={6}>
                <DashboardPatientSearch />
            </Grid>
          <Grid item xs={6}>
            <DashboardMaterials />
          </Grid>
          <Grid item xs={6}>
            <DashboardCalendar />
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
