import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Divider, Typography } from 'material-ui';

const styles = theme => ({});

const WelcomeBar = props => (
  <div>
    <Typography variant="subheadline">&gt; Home</Typography>
    <br />
    <Typography variant="headline">Welcome Dr. House</Typography>
    <Divider />
    <br />
  </div>
);

export default withStyles(styles)(WelcomeBar);
