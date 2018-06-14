import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { Grid, Button, Divider } from '@material-ui/core';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});


class LoginCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item container spacing={24} alignItems="center" direction="column">
        <Grid item>
          <img src="../../logo_OH_small.png" />
        </Grid>
        <Grid item>
          <TextField
            id="Email"
            label="Email"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            style={{ width: "500px" }}
          />
        </Grid>
        <Grid item>
          <TextField
            helperText="forgot password?"
            id="password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            style={{ width: "500px" }}
          />
        </Grid>
        <Grid item>
          <Button
            style={{
              backgroundColor: "rgb(239, 153, 105)",
              color: "white",
              width: "500px"
            }}
          >
            Sign in
          </Button>
          <br />
          <br />

          <Divider />
        </Grid>
        <Grid item>
          <div style={{ color: "rgb(239, 153, 105)", float: "left" }}>
            if you have not yet registered,
          </div>
          <div style={{ color: "rgb(239, 153, 105)", float: "left", fontWeight: "700" }}>click here</div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(LoginCredentials);