import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Button, Icon } from '@material-ui/core';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Clear from '@material-ui/icons/Clear';
import MergeType from '@material-ui/icons/MergeType';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class PatientDBBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visibility: true }
    this.handleChange = this.handleChange.bind(this);
    window.addEventListener("resize", this.handleChange);
  }

  handleChange() {
    if (window.innerWidth <= 1000)
      this.setState({ visibility: false });
    else
      this.setState({ visibility: true });
  }

  render() {
    return (
      <div>
        <Grid container alignItems="center" spacing={8}>
          <Grid item>
            <Typography variant="subheadline">Home / Patients database</Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant="headline" style={{ float: 'left', fontWeight: "700" }}>Patients database</Typography>
        <Grid container style={{ width: "70%", marginLeft: "30%" }} justify="flex-end">


          <Grid item style={{ marginRight: "10px" }}>
            <Button variant="raised" variant="headline" style={{
              backgroundColor: 'rgba(239, 156, 102, 1)',
              textTransform: "lowercase",
              color: 'white',
            }}
            >
              <MergeType />
              {this.state.visibility === true ? <div>&nbsp;&nbsp;Merge double patients' registration</div> : ""}
            </Button>
          </Grid>

          <Grid item style={{ marginRight: "10px" }}>
            <Button variant="raised" variant="headline" style={{
              backgroundColor: 'rgba(239, 156, 102, 1)',
              textTransform: "lowercase",
              color: 'white',
            }}>
              <PersonAdd />
              {this.state.visibility === true ? <div>&nbsp;&nbsp;Add a patient</div> : ""}
            </Button>
          </Grid>
          <Grid item style={{ marginRight: "10px" }}>
            <Button variant="raised" variant="headline" style={{
              backgroundColor: 'rgba(239, 156, 102, 1)',
              textTransform: "lowercase",
              color: 'white',
            }}>
              <Clear />
              {this.state.visibility === true ? <div>&nbsp;&nbsp;Delete a patient</div> : ""}
            </Button>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(PatientDBBar);
