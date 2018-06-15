import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper } from '@material-ui/core';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import BillingPagePatientInfo from '../../components/BillingPagePatientInfo';
import BillingPageBar from '../../components/BillingPageBar';
import BillingPageHealthServiceInfo from '../../components/BillingPageHealthServiceInfo';
import BillingPagePaymentInfo from '../../components/BillingPagePaymentInfo';
import BillingPageDailyPaymentInfo from '../../components/BillingPageDailyPaymentInfo';

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

const BillingPage = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={1} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <BillingPageBar />
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <BillingPagePatientInfo />
            </Grid>
            <Grid item xs={12}>
              <BillingPageHealthServiceInfo />
            </Grid>
            <Grid item xs={12}>
              <BillingPagePaymentInfo tot_amount={'£ 200.00'} />
            </Grid>
            <Grid item xs={12}>
              <BillingPageDailyPaymentInfo />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <ChatFloatingPopup />
  </div>
);

export default withStyles(styles)(BillingPage);
