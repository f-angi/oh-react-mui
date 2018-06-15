import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Divider, TextField } from '@material-ui/core';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
  width: {
    width: '100%',
    textAlign: 'center',
  },
});

class LoginCredentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16} alignItems="center">
        <Grid item>
          <div className={classes.margin}>
            <img src="../../logo_OH_small.png" alt="logo" /></div>
        </Grid>
        <Grid item>
          <div className={classes.width}>
            <TextField
              id="Email"
              label="Email"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.width}>
            <TextField
              helperText="Forgot password?"
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"

            />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.width}>
            <Button
              style={{
                backgroundColor: 'rgb(239, 153, 105)',
                color: 'white',
              }}
            >
              Sign in
            </Button>
            <br />
            <br />
            <Divider style={{ width: '300px' }} />
          </div>
        </Grid>
        <Grid item>
          <div style={{ color: 'rgb(239, 153, 105)', float: 'left' }}>
            If you haven't yet registered,
          </div>
          <div style={{ color: 'rgb(239, 153, 105)', float: 'left', fontWeight: '500' }}> CLICK HERE</div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(LoginCredentials);
