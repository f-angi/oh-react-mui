import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton, InputLabel, Select, FormHelperText, FormControl } from '@material-ui/core';
import DashboardSection from '../DashboardSection';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => {
};

class PatientDBSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };


  render() {
    return (
      <div>
        <DashboardSection title="Find a collague">
          <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Insert the information of
            the collague</Typography>
          <Grid container justify="space-between" alignItems="stretch" spacing={24}>
            <Grid item>
              <TextField
                label="Name or Username"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Surname"
              />
            </Grid>
            <Grid item>
              <FormControl>
                <FormControl>
                  <InputLabel />
                  <Select
                    native
                    value={this.state.filter}
                    onChange={this.handleChange('filter')}
                    inputProps={{
                      id: 'filter',
                    }}
                  >
                    <option value={'Select profession, specialization or usergroup from the list'}>Select profession,
                      specialization or usergroup from the list
                    </option>
                    <option value={'Surgeon'}>Surgeon</option>
                    <option value={'Ophtalmologist'}>Ophtalmologist</option>
                    <option value={'Pneumologist'}>Pneumologist</option>
                  </Select>
                  {this.state.filter === '' ? <FormHelperText>Profession / Specialization/Usergroup</FormHelperText> :
                    <div />}
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

export default withStyles(styles)(PatientDBSearch);
