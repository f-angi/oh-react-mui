import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Divider, Card, CardContent, Button } from '@material-ui/core';
import LocalHospital from '@material-ui/icons/LocalHospital';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});


const DrugsOutOfStock = props => (
  <div>
    <Card>
      <CardContent>
        <div style={{ color: "rgb(148, 148, 148)" }}>DRUGS OUT OF STOCK</div>
        <br />
        <Divider style={{ width: "130%", marginLeft: "-30px" }} />
        <br />
        <div style={{ color: "rgb(148, 148, 148)", fontSize: "12px" }}>NEXT REFUELING IN</div>
        <br />
        <Grid container spacing={40} style={{ textAlign: "center" }}>
          <Grid item>0<br /> weeks</Grid>
          <Grid item>1<br /> week</Grid>
          <Grid item>2<br /> weeks</Grid>
          <Grid item>3<br /> weeks</Grid>
          <Grid item>+4<br /> weeks</Grid>
        </Grid>
        <br />

        <div style={{ textAlign: "center" }}>Amoxicillin</div>
        <Divider style={{ height: "20px", backgroundColor: "green", width: "22.5%", marginLeft: "20px" }} />
        <br />

        <div style={{ textAlign: "center" }}>Claritromicina</div>
        <Divider style={{ height: "20px", backgroundColor: "orange", width: "67.5%", marginLeft: "20px" }} />
        <br />

        <div style={{ textAlign: "center" }}>Omeprazole</div>
        <Divider style={{ height: "20px", backgroundColor: "red", width: "90%", marginLeft: "20px" }} />
        <br />

        <div style={{ textAlign: "center" }}>Naproxen</div>
        <Divider style={{ height: "20px", backgroundColor: "green", width: "22.5%", marginLeft: "20px" }} />
        <br />

        <div style={{ textAlign: "center" }}>Clonazepam</div>
        <Divider style={{ height: "20px", backgroundColor: "red", width: "67.5%", marginLeft: "20px" }} />
        <br />

        <div style={{ textAlign: "center" }}>Ibuprofen</div>
        <Divider style={{ height: "20px", backgroundColor: "yellow", width: "45%", marginLeft: "20px" }} />
        <br />
        <br />
        <Button style={{ backgroundColor: "rgb(239, 156, 102)", color: "white", width: "100%", marginBottom: "10px" }}>
          Make drugs' inventory <LocalHospital />
        </Button>
      </CardContent>
    </Card>
    <br />
  </div>
);

export default withStyles(styles)(DrugsOutOfStock);