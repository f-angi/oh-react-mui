import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from '@material-ui/core';
import DashboardSection from '../DashboardSection';
import TextField from '@material-ui/core/TextField';


const styles = (theme) => {
};

const PatientDBSearch = props => (
  <div>
    <DashboardSection title="Find a patient">
      <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>Insert the information of the
        patient
      </Typography>
      <Grid container justify="space-between" alignItems="left" spacing={24}>
        <Grid item>
          <TextField
            floatingLabelFixed={true}
            label="Patient ID (PID)"
          />
        </Grid>
        <Grid item>
          <TextField
            floatingLabelFixed={true}
            label="Outpatient Number (OPD)"
          />
        </Grid>
        <Grid item>
          <TextField
            floatingLabelFixed={true}
            label="Inpatient Number (IDP)"
          />
        </Grid>
        <Grid item>
          <TextField
            floatingLabelFixed={true}
            label="Keyword"
          />
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

export default withStyles(styles)(PatientDBSearch);
