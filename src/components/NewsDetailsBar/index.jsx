import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import NoteAdd from '@material-ui/icons/NoteAdd';

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
    window.addEventListener("resize", this.handleChange);
  }

  handleChange() {
    if (window.innerWidth <= 400)
      this.setState({ visibility: false });
    else
      this.setState({ visibility: true });
  }

  render() {
    return (
      <div>
        <Grid container alignItems="center" spacing={8}>
          <Grid item>
            <Typography variant="subheading">Home / News / News details</Typography>
          </Grid>
        </Grid>
        <br />
        <Typography variant="headline" style={{ float: 'left', fontWeight: "700" }}>News details</Typography>
        <Button style={{
          float: "right",
          backgroundColor: "rgb(239, 156, 102)",
          color: "white",
          marginTop: "-5px"
        }}><NoteAdd />
          {this.state.visibility ? "Write a news" : ""}
        </Button>
        <br />
        <br />
      </div>
    );
  }
}

export default withStyles(styles)(NewsDetailsBar);
