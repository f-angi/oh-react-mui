import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles/index';
import { Divider, Button, Grid } from '@material-ui/core';
import { Edit } from '@material-ui/icons';

const styles = theme => ({
  titles: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  buttonInlineDuo: {
    margin: theme.spacing.unit,
    minWidth: '44%',
  },
});

const PatientRightMainBar = (props) => {
  const { classes } = props;
  return (
    props.editMode
      ? (
        <div className={classes.titles}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <h1>{props.patientName} <Edit onClick={props.editOnClick} /></h1>
              <p>Provenance: <b>{props.provenance}</b></p>
            </Grid>
            <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
              {/* CLINICAL SHEET */}
              <Button
                variant="raised"
                component="span"
                className={classes.buttonInlineDuo}
                style={{
                  backgroundColor: 'rgba(239, 156, 102, 1)',
                  color: '#FFFFFF',
                }}
              >
                CLINICAL SHEET
              </Button>
              {/* OPD */}
              <Button
                variant="raised"
                component="span"
                className={classes.buttonInlineDuo}
                style={{
                  borderColor: '#rgba(239, 156, 102, 1)',
                  color: 'rgba(239, 156, 102, 1)',
                }}
              >
                OPD
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <br />
          <h3>{props.mainTitle}</h3>
        </div>
      )
      : (
        <div className={classes.titles}>
          <h1>{props.patientName}</h1>
          <p>Provenance: <b>{props.provenance}</b></p>
          <Divider />
          <br />
          <h3>{props.mainTitle}</h3>
        </div>
      )
  );
};

PatientRightMainBar.defaultProps = {
  editMode: false,
  editOnClick: null,
};

PatientRightMainBar.propTypes = {
  classes: PropTypes.object.isRequired,
  patientName: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  editOnClick: PropTypes.func,
};

export default withStyles(styles)(PatientRightMainBar);
