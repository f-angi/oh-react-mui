import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, Select, FormControl } from '@material-ui/core';

const styles = (theme) => {
};

class NewsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <Grid container>
        <Grid item style={{ fontSize: "12px", float: "left", marginTop: "-50px" }}>
          Filter
          <FormControl style={{ marginLeft: "15px" }}>
            <FormControl>
              <Select
                native
                value={this.state.filter}
                onChange={this.handleChange('filter')}
                inputProps={{
                  id: 'filter',
                }}
              >
                <option value={"Most-recent"}>Most recent</option>
                <option value={"Last-update"}>Last update</option>
              </Select>
            </FormControl>
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(NewsFilter);
