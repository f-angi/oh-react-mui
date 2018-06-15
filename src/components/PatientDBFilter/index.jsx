import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  IconButton,
  InputLabel,
  FormControl,
  Select,
  FormHelperText,
} from '@material-ui/core';
import DashboardSection from '../DashboardSection';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});


class PatientDBFilter extends React.Component {
  state = {
    filter: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  todayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today;
  }

  render() {
    return (
      <div>
        <DashboardSection title="Which patient are you searching for?">

          <Grid container alignItems="stretch" spacing={40} justify="flex-start" direction="row">
            <Grid item xs>
              <div style={{ margin: 10 }}>
                <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Use the filter for a
                  faster
                  search
                </Typography>
                <FormControl>
                  <InputLabel>Filter</InputLabel>
                  <Select
                    native
                    value={this.state.filter}
                    onChange={this.handleChange('filter')}
                    inputProps={{
                      id: 'filter',
                    }}
                  >
                    <option value="" />
                    <option value={'Chronic-Patient'}>Chronic Patient</option>
                    <option value={'Properly-Admission'}>Properly Admission</option>
                    <option value={'Visited-this-month'}>Visited this month</option>
                    <option value={'Visited-last-month'}>Visited last month</option>
                  </Select>
                  {this.state.filter === '' ? <FormHelperText>Select the filter</FormHelperText> : <div></div>}
                </FormControl>
              </div>
            </Grid>

            <Grid item xs>
              <div style={{ marginBottom: 10 }}>
                <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Filter by ADMISSIONS
                  range date
                </Typography>
              </div>
              <form noValidate>
                <TextField
                  id="date"
                  label="From"
                  type="date"
                  defaultValue={this.todayDate()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <form noValidate>
                <TextField
                  id="date"
                  label="To"
                  type="date"
                  defaultValue={this.todayDate()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>

            <Grid item xs>
              <div style={{ marginBottom: 10 }}>
                <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Filter by VISIT range
                  date
                </Typography>
              </div>
              <form noValidate>
                <TextField
                  id="date"
                  label="From"
                  type="date"
                  defaultValue={this.todayDate()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <form noValidate>
                <TextField
                  id="date"
                  label="To"
                  type="date"
                  defaultValue={this.todayDate()}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Grid>
            <Grid item>
              <br />
              <br />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DashboardSection>
      </div>
    )
  }
}

export default withStyles(styles)(PatientDBFilter);
