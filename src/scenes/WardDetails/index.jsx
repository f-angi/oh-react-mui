import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import WardDetailsSearch from '../../components/WardDetailsSearch';
import WardDetailsBar from '../../components/WardDetailsBar';
import WardDetailsFilter from '../../components/WardDetailsFilter'
import WardDetailsSummary from '../../components/WardDetailsSummary';
import PatientDBCard from '../../components/PatientDBCard';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
      marginBottom: '80px',
    }),
});

const WardDetails = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={4} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <WardDetailsBar />
          <div style={{ float: 'left', fontSize: '30px', color: 'orange', textDecoration: 'underline' }}>Inpatient
            department
          </div>
          <div style={{ float: 'left', fontSize: '30px', color: 'orange', marginLeft: '50px' }}>Outpatient department
          </div>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <WardDetailsSummary
                patients="14"
                patientsToday="2"
                patientsMonth="12"
                bor="46%"
                avgLos="3.5"
                totBor="68%"
                avgLos2="4.7"
              />
              <br />
              <WardDetailsSearch />
            </Grid>
            <WardDetailsFilter />
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

export default withStyles(styles)(WardDetails);
