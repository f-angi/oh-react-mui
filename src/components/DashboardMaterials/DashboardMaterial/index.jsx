import React from 'react';

import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Divider, Grid, Typography } from '@material-ui/core';


const styles = theme => ({});

const DashboardMaterial = (props) => {
  const { material } = props;
  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container spacing={8}>
          <Grid item>
            <WarningIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography color="textSecondary" variant="caption" style={{ display: 'inline' }}>The drug is running out</Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="headline">{material.name}</Typography>
          </Grid>
          <Grid item>
            <CardActions><Button>Go to details</Button></CardActions>
          </Grid>
        </Grid>
        <br />
        <Grid container justify="flex-start">
          <Grid item xs={3}>
            <Typography variant="headline">{material.remaining}</Typography>
            <Typography variant="body1"><strong>vials</strong><br />remaining</Typography>
          </Grid>
          <Grid item xs={1}>&nbsp;
          </Grid>
          <Grid item xs={3}>
            <Typography variant="headline">{material.weeksRefueling}</Typography>
            <Typography variant="body1"><strong>weeks</strong><br /> for the next refueling</Typography>
          </Grid>
        </Grid>
        <br />
        <Divider />
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(DashboardMaterial);
