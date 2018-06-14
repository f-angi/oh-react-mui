import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import ColleguesDBSearch from '../../components/ColleguesDBSearch';
import ColleguesDBBar from '../../components/ColleguesDBBar';
import ColleguesDBCard from '../../components/ColleguesDBCard';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});

var lastPatient = { name: "Modotoky", surname: "tokai" };

const ColleguesDB = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={2} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <ColleguesDBBar />
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <ColleguesDBSearch />
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={24} justify="center" direction="row" alignItems="center">
                <Grid item>
                  <ColleguesDBCard
                    doctorName="Meredith Greys"
                    doctorType="Pneummologist"
                    phoneNumber="34538290432"
                    email="greys.meredith@gmail.com"
                    lastPatient1={lastPatient}
                    lastPatient2={lastPatient}
                    lastPatient3={lastPatient}
                    lastPatient4={lastPatient}
                  />
                </Grid>
                <Grid item>
                  <ColleguesDBCard
                    doctorName="Meredith Greys"
                    doctorType="Pneummologist"
                    phoneNumber="34538290432"
                    email="greys.meredith@gmail.com"
                    lastPatient1={lastPatient}
                    lastPatient2={lastPatient}
                    lastPatient3={lastPatient}
                    lastPatient4={lastPatient}
                  />
                </Grid>
                <Grid item>
                  <ColleguesDBCard
                    doctorName="Meredith Greys"
                    doctorType="Pneummologist"
                    phoneNumber="34538290432"
                    email="greys.meredith@gmail.com"
                    lastPatient1={lastPatient}
                    lastPatient2={lastPatient}
                    lastPatient3={lastPatient}
                    lastPatient4={lastPatient}
                  />
                </Grid>
                <Grid item>
                  <ColleguesDBCard
                    doctorName="Meredith Greys"
                    doctorType="Pneummologist"
                    phoneNumber="34538290432"
                    email="greys.meredith@gmail.com"
                    lastPatient1={lastPatient}
                    lastPatient2={lastPatient}
                    lastPatient3={lastPatient}
                    lastPatient4={lastPatient}
                  />
                </Grid>
                <Grid item>
                  <ColleguesDBCard
                    doctorName="Meredith Greys"
                    doctorType="Pneummologist"
                    phoneNumber="34538290432"
                    email="greys.meredith@gmail.com"
                    lastPatient1={lastPatient}
                    lastPatient2={lastPatient}
                    lastPatient3={lastPatient}
                    lastPatient4={lastPatient}
                  />
                </Grid>
                <Grid item>
                  <ColleguesDBCard
                    doctorName="Meredith Greys"
                    doctorType="Pneummologist"
                    phoneNumber="34538290432"
                    email="greys.meredith@gmail.com"
                    lastPatient1={lastPatient}
                    lastPatient2={lastPatient}
                    lastPatient3={lastPatient}
                    lastPatient4={lastPatient}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <ChatFloatingPopup />
  </div>
);

export default withStyles(styles)(ColleguesDB);
