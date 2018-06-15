import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, FormControl, InputLabel, Select, FormHelperText, TextField } from '@material-ui/core';
import DashboardSection from '../DashboardSection';


const styles = (theme) => {
};

class BillingPageHealthServiceInfo extends React.Component {
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
        <DashboardSection title="Health service information">
          <Grid container justify="space-between" alignItems="stretch" direction="column">
            <Grid container justify="space-between" alignItems="flex-start" direction="column">
              <Grid item>
                <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Description of health
                  service</Typography>
              </Grid>
              <Grid item>
                <br />
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
                      <option value={'Analysis'}>Analysis</option>
                      <option value={'Laboratory-test'}>Laboratory test</option>
                      <option value={'Surgery'}>Surgery</option>
                    </Select>
                    {this.state.patient_type === ''
                      ? <FormHelperText>Select the service from the list above</FormHelperText>
                      : <div />
                    }
                  </FormControl>
                </div>
              </Grid>
            </Grid>
            <Grid item>
              <br /><TextField fullWidth helperText="Notes" />
            </Grid>
          </Grid>
        </DashboardSection>
      </div>
    )
  }
}

export default withStyles(styles)(BillingPageHealthServiceInfo);
