import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Grid, Paper, Typography } from 'material-ui';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    // [theme.breakpoints.up('md')]: {
    //   marginTop: theme.spacing.unit * 3,
  }),
});

const DashboardSection = (props) => {
  const {
    classes, title, controlComponent, children,
  } = props;
  return (
    <Paper className={classes.root} elevation={8}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="title" color="textSecondary"><strong>{title}</strong></Typography>
        </Grid>
        <Grid item>
          {controlComponent}
        </Grid>
      </Grid>
      <br />
      {children}
    </Paper>
  );
};

export default withStyles(styles)(DashboardSection);
