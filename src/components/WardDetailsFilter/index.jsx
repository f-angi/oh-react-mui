import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {
  Grid,
  InputLabel,
  Select,
  FormControl
} from '@material-ui/core';

const styles = (theme) => {
};

class WardDetailsFilter extends React.Component {
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
        <Grid item>
          <div style={{ fontWeight: "700", marginLeft: "170px", float: "left", fontSize: "20px" }}>Which admitted
            patient are you searching for?
          </div>
          <div style={{ marginLeft: "173px" }}>Use the filter for a faster search</div>
        </Grid>
        <Grid item style={{ fontSize: "12px", float: "left", marginLeft: "63.8%", marginTop: "-50px" }}>
          Filter
          <FormControl style={{ marginLeft: "15px" }}>
            <FormControl>
              <InputLabel>
              </InputLabel>
              <Select
                native
                value={this.state.filter}
                onChange={this.handleChange('filter')}
                inputProps={{
                  id: 'filter1',
                }}
              >
                <option value={"Admitted today"}>Admitted today</option>
                <option value={"Admitted less than 3 days ago"}>Admitted less than 3 days ago</option>
                <option value={"Admitted from 3 to 7 days ago"}>Admitted from 3 to 7 days ago</option>
                <option value={"Admitted more than 7 days ago"}>Admitted more than 7 days ago</option>
              </Select>
            </FormControl>
          </FormControl>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(WardDetailsFilter);
