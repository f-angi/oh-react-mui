import React from 'react';
// import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';

import Header from '../../components/Header';
import WelcomeBar from '../../components/WelcomeBar';
import DashboardPatientRegistration from '../../components/DashboardPatientRegistration';
import DashboardPatientSearch from '../../components/DashboardPatientSearch';
import DashboardMaterials from '../../components/DashboardMaterials';
import DashboardCalendar from '../../components/DashboardCalendar';
import DashboardAppointments from '../../components/DashboardAppointments';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import {Grid, Paper} from 'material-ui';

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
    <div>
        <Grid container justify="center" alignItems="stretch">
            <Grid item xs={12} lg={10}>
                <Header username={props.username} hospitalName={props.hospitalName}/>
                <Paper elevation={4} className={props.classes.appFramePaper}>
                    <WelcomeBar path={"Home"} txt={"Welcome Dr. House"}/>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={6}>
                            <DashboardPatientRegistration/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DashboardPatientSearch/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DashboardMaterials/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container direction="column" spacing={24}>
                                <Grid item sm={12}>
                                    <DashboardCalendar/>
                                </Grid>
                                <Grid item sm={12}>
                                    <DashboardAppointments/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <ChatFloatingPopup/>
    </div>
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
