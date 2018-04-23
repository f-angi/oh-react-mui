import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Paper, Typography } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const DashboardSection = (props) => {
  const { classes, title, children } = props;
  return (
    <Paper className={classes.root} elevation={8}>
      <Typography variant="title" color="textSecondary"><strong>{title}</strong></Typography>
      <br />
      {children}
    </Paper>
  );
};

export default withStyles(styles)(DashboardSection);
