import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography } from '@material-ui/core';

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
    window.addEventListener('resize', this.handleChange);
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
            <Typography variant="subheading">Home / Collegues database</Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant="headline" style={{ float: 'left', fontWeight: '700' }}>Collegues database</Typography>
        <Grid container style={{ width: '70%', marginLeft: '30%' }} justify="flex-end" />
        <br />
        <br />
        <Divider />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(PatientDBBar);
