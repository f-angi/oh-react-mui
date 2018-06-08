import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class SelectTimeRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRange: 'day',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <Select
          value={this.state.timeRange}
          onChange={this.handleChange}
          name="timeRange"
          className={classes.selectEmpty}
          disableUnderline
        >
          <MenuItem value="day">Day</MenuItem>
          <MenuItem value="week">Week</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectTimeRange);
