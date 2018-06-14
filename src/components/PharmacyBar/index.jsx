import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Divider, Grid, Typography, Button, Icon } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear';
import Add from '@material-ui/icons/Add';


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

class NewsDetailsBar extends React.Component {
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
            <Typography variant="subheadline">Home / Pharmacy</Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant="headline" style={{ float: 'left', fontWeight: "700" }}>Pharmacy</Typography>
        <br />
        <br />
        <br />
        <Divider />
        <br />
        <Grid container style={{ width: "50%" }}>
          <Grid item style={{ color: "rgb(239, 153, 105)", fontSize: "18px", marginRight: "50px" }}>
            Stock
          </Grid>
          <Grid item style={{ color: "rgb(239, 153, 105)", fontSize: "18px", }}>
            Movements
          </Grid>
        </Grid>
        <Grid container justify="flex-end" alignItems="flex-start"
              style={{ marginTop: "-20px", float: "right", width: "50%" }}>
          <Grid item>
            <Button style={{ backgroundColor: "rgb(239, 156, 102)", color: "white", marginRight: "10px" }}><Add />
              {this.state.visibility ? "Charge" : ""}
            </Button>
          </Grid>
          <Grid item>
            <Button style={{ backgroundColor: "rgb(239, 156, 102)", color: "white", marginRight: "10px" }}><Clear />
              {this.state.visibility ? "Discharge" : ""}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(NewsDetailsBar);