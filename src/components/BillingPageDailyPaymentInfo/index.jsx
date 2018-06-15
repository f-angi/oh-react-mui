import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import DashboardSection from '../DashboardSection';

const styles = (theme) => {
};

class BillingPagePaymentInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      patient_type: '',
      value: '',
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <DashboardSection title="Daily payment information">
          <Grid container justify="space-between" alignItems="stretch" direction="column">
            <br />
            <Grid container alignItems="stretch" spacing={24}>
              <Grid item xs style={{
                background: 'rgba(242, 242, 242, 1)',
                marginLeft: '5px',
                textAlign: 'center',
                marginBottom: '10px',
              }}>
                <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>5</div>
                <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PAYMENTS</div>
                <br />
              </Grid>

              <Grid item xs style={{
                background: 'rgba(242, 242, 242, 1)',
                marginLeft: '5px',
                textAlign: 'center',
                marginBottom: '10px',
              }}>
                <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>3</div>
                <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>OPEN</div>
                <div style={{ fontSize: '9px', color: '#666666', fontWeight: '700' }}>Status of payment</div>
                <br />
              </Grid>

              <Grid item xs style={{
                background: 'rgba(242, 242, 242, 1)',
                marginLeft: '5px',
                textAlign: 'center',
                marginBottom: '10px',
              }}>
                <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>4</div>
                <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>CLOSE</div>
                <div style={{ fontSize: '9px', color: '#666666', fontWeight: '700' }}>Status of payment</div>
                <br />
              </Grid>
            </Grid>
          </Grid>
        </DashboardSection>
      </div>
    )
  }
}

export default withStyles(styles)(BillingPagePaymentInfo);
