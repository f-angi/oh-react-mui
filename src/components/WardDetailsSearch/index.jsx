import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton, InputLabel, Select, FormControl } from '@material-ui/core';
import DashboardSection from '../DashboardSection';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => {
};

class WardDetailsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter1: '', filter2: '' };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange1 = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChange2 = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <DashboardSection title="Find a patient">
          <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Find a patient in
            ward</Typography>
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
              <FormControl>
                <FormControl>
                  <InputLabel />
                  <Select
                    native
                    value={this.state.filter}
                    onChange={this.handleChange1('filter1')}
                    inputProps={{
                      id: 'filter1',
                    }}
                  >
                    <option value={'0/3 months'}>0/3 months</option>
                    <option value={'6/12 months'}>6/12 months</option>
                    <option value={'12/24 months'}>12/24 months</option>
                    <option value={'24/48 months'}>24/48 months</option>
                    <option value={'5/8 years'}>5/8 years</option>
                    <option value={'8/14 years'}>8/14 years</option>
                    <option value={'15/20 years'}>15/20 years</option>
                    <option value={'20/25 years'}>20/25 years</option>
                    <option value={'25/35 years'}>25/35 years</option>
                  </Select>
                </FormControl>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl>
                <FormControl>
                  <InputLabel />
                  <Select
                    native
                    value={this.state.filter}
                    onChange={this.handleChange2('filter2')}
                    inputProps={{
                      id: 'filter2',
                    }}
                  >
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                  </Select>
                </FormControl>
              </FormControl>
            </Grid>


            <Grid item>
              <br />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Grid>

          </Grid>
        </DashboardSection>
      </div>
    );
  }
}

export default withStyles(styles)(WardDetailsSearch);
