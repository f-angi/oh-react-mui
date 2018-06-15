import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormControl, InputLabel, Select, FormHelperText, TextField } from '@material-ui/core';
import DashboardSection from '../DashboardSection';


const styles = (theme) => {
};

class BillingPagePatientInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient_type: '',
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <DashboardSection title="Patient Information">
          <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Insert the information of
            the patient here</Typography>
          <Grid container justify="space-between" alignItems="stretch" direction="column">
            <Grid container justify="space-between" alignItems="stretch" spacing={24}>
              <Grid item>
                <TextField
                  label="Patient ID (PID)"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Outpatient Number (OPD)"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Inpatient Number (IDP)"
                />
              </Grid>
              <Grid item>
                <div>
                  <FormControl>
                    <InputLabel>Type</InputLabel>
                    <Select
                      native
                      value={this.state.patient_type}
                      onChange={this.handleChange('patient_type')}
                      inputProps={{
                        id: 'filter',
                      }}
                    >
                      <option value="" />
                      <option value={'Base'}>Base</option>
                      <option value={'Insured'}>Insured</option>
                      <option value={'Insured-with-COMPANY-NAME'}>Insured with COMPANY NAME</option>
                      <option value={'Insured-with-COMPANY-NAME-X'}>Insured with COMPANY NAME X</option>
                      <option value={'Insured-with-COMPANY-NAME-Y'}>Insured with COMPANY NAME Y</option>
                    </Select>
                    {this.state.patient_type === ''
                      ? <FormHelperText>Select the patient type from the list above</FormHelperText>
                      : <div></div>
                    }
                  </FormControl>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}><strong>Have a
                problem?</strong> <a href="/search">Search a patient</a> in the database and start the payment process.
              </Typography>
            </Grid>
          </Grid>
        </DashboardSection>
      </div>
    )
  }
}

export default withStyles(styles)(BillingPagePatientInfo);
