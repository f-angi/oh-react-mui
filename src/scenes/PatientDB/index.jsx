import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import PatientDBSearch from '../../components/PatientDBSearch';
import PatientDBFilter from '../../components/PatientDBFilter';
import PatientDBBar from '../../components/PatientDBBar';
import PatientDBCard from '../../components/PatientDBCard';

const styles = theme => ({
    appFramePaper:
      theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.secondary.main,
        marginBottom: '70px',
      }),
  })
;

const PatientDB = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={1} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <PatientDBBar />
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <PatientDBSearch />
            </Grid>
            <Grid item xs={12}>
              <PatientDBFilter />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={24} justify="center" direction="row" alignItems="center">
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
                  />
                </Grid>
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
                  />
                </Grid>
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
                  />
                </Grid>
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
                  />
                </Grid>
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
                  />
                </Grid>
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
                  />
                </Grid>
                <Grid item>
                  <PatientDBCard
                    pid="32040"
                    opd="8937821"
                    sex="male"
                    lastAddition="01.01.2000"
                    reason="Pneumonia and malnutrition"
                    treatment="Pneumond and malnutrition"
                    chronic="true"
                    lastDoctor="Greys"
                    type="Pneumologist"
                    phoneNumber="34538290432"
                    mail="greys@gmail.com"
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

export default withStyles(styles)(PatientDB);
