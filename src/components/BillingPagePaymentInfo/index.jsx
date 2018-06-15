import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Radio,
  Button,
  TextField,
} from '@material-ui/core';
import { CreditCard, EuroSymbol } from '@material-ui/icons';
import DashboardSection from '../DashboardSection';

const styles = (theme) => {
};

class BillingPagePaymentInfo extends React.Component {
  constructor(props) {
    super(props);
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
        <DashboardSection title="Payment Information">
          <Grid container justify="space-between" alignItems="stretch" direction="column">
            <Grid container alignItems="flex-start" spacing={40} direction="row">
              <Grid item>

                <Grid item>
                  <Typography gutterBottom color="textSecondary">Status of the payment</Typography>
                  <Typography color="primary" align="center"><strong>OPEN</strong></Typography>
                </Grid>
                <Grid item>
                  <TextField
                    disabled={true}
                    defaultValue={this.props.tot_amount}
                    label="Total amount of the bill"
                    style={{ marginTop: '15px' }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Single payment"
                    style={{ marginTop: '15px' }}
                  />
                </Grid>
              </Grid>

              <Grid item>
                <Grid item>
                  <TextField
                    label="Cashier"
                    helperText="insert name and surname"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    disabled={true}
                    defaultValue={this.props.tot_amount}
                    label="Total amount unpaid"
                    style={{ marginTop: '15px' }}
                  />
                </Grid>
                <Grid item>
                  <Grid item>
                    <Typography color="textSecondary" style={{ marginTop: '15px' }}>Payment method</Typography>
                    <Radio
                      color="primary"
                      checked={this.state.value === 'a'}
                      checkedIcon={<CreditCard />}
                      icon={<CreditCard />}
                      onChange={this.handleChange}
                      value="a"
                      name="credit_card"
                      aria-label="A"
                    />
                    <Radio
                      color="primary"
                      checked={this.state.value === 'b'}
                      checkedIcon={<EuroSymbol />}
                      icon={<EuroSymbol />}
                      onChange={this.handleChange}
                      value="b"
                      name="cash"
                      aria-label="B"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <Button variant="raised" style={{
                    backgroundColor: 'rgba(239, 156, 102, 1)',
                    color: 'white',
                    marginTop: '20px',
                  }}>
                    <div>$ RAISE THE BILL</div>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="raised" style={{
                    backgroundColor: 'rgba(239, 156, 102, 1)',
                    color: 'white',
                    marginTop: '20px',
                  }}>
                    <div>$ PAY</div>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DashboardSection>
      </div>
    )
  }
}

export default withStyles(styles)(BillingPagePaymentInfo);
