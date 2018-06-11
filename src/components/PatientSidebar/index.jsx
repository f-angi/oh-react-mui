import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';

import { Person, Phone } from '@material-ui/icons';
import { Avatar, Divider, FormControlLabel, Switch } from '@material-ui/core';

const styles = theme => ({
  containerWhite: {
    backgroundColor: 'white',
    boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    marginBottom: '70px',
  },
  titlesWhite: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: 'white',
  },
  titleDoctor: {
    marginTop: '10px',
    color: 'white',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  titleDoctor2: {
    marginTop: '-10px',
    color: 'white',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  titleDoctor3: {
    marginTop: '-36px',
    color: 'white',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  bigAvatar: {
    width: '100px',
    height: '100px',
    backgroundColor: 'white',
    marginLeft: '25px',
  },
  Avatar1: {
    width: '30px',
    height: '30px',
    backgroundColor: 'white',
    marginTop: '-20px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  Switch: {
    color: 'white',
  },
  number: {
    color: 'white',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: '-25px',
  },
});

const PatientSidebar = (props) => {
  const { classes } = props;
  return (
    <div id="resize">
      <div id="resizeTop">
        <div id="icon">
          <Person style={{ color: 'white', marginLeft: '75%' }} />
        </div>
        <div id="resizeAvatar1">
          <Avatar
            className={classes.bigAvatar}
            alt={props.patientName}
            src={props.patientAvatarSrc}
          />
        </div>
        <h6 className={classes.titlesWhite}>HEALTH INFORMATION </h6>
        <h6 className={classes.titlesWhite}>Patient ID </h6>
        <h1 className={classes.number}>{props.patientID}</h1>
        <h6 className={classes.titlesWhite}>OPD</h6>
        <h1 className={classes.number}>{props.OPD}</h1>
        <h6 className={classes.titlesWhite}>Blood Group </h6>
        <h1 className={classes.number}>{props.bloodGroup}</h1>
        <h6 className={classes.titlesWhite}>
          Notes
          <div id="resizeList">
            <ul>
              {props.notes.map(elem => <li key={elem}>{elem}</li>)}
            </ul>
          </div>
        </h6>
        <FormControlLabel
          control={
            <Switch
              className={classes.Switch}
              checked={props.cronic}
              onChange={props.cronicOnChange('checkedCronic')}
              value="checkedCronic"
              disabled
            />
          }
          label={<h6 className={classes.titlesWhite}>Cronic Patient</h6>}
        />
      </div>
      <Divider style={{ backgroundColor: 'white' }} />
      <div id="resizeBottom">
        <h6 className={classes.titlesWhite}>Last admission: {props.lastAdmission}</h6>
        <h6 className={classes.titlesWhite}>Reason for visit: {props.reason}</h6>
        <h6 className={classes.titlesWhite}>Treatment made: {props.treatment}</h6>
        <h6 className={classes.titlesWhite}>Last doctor who visit the patient</h6>
        <div className={classes.all}>
          <div id="resizeAvatar2">
            <Avatar
              className={classes.Avatar1}
              alt={props.doctorName}
              src={props.doctorAvatarSrc}
            />
          </div>
          <div>
            <h6 className={classes.titleDoctor}>{props.doctorName}</h6>
          </div>
          <h6 className={classes.titleDoctor2}>{props.doctorJob}</h6>
          <br />
          <h6 className={classes.titleDoctor3}><Phone /><br />{props.doctorPhone}</h6>
        </div>
      </div>
    </div>
  );
};

// PatientSidebar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   patientName: PropTypes.string,
//   patientAvatarSrc: PropTypes.string,
//   patientID: PropTypes.string,
//   OPD: PropTypes.string,
//   bloodGroup: PropTypes.string,
//   notes: PropTypes.array,
//   cronic: PropTypes.bool,
//   cronicOnChange: PropTypes.func,
//   lastAdmission: PropTypes.string,
//   reason: PropTypes.string,
//   treatment: PropTypes.string,
//   doctorName: PropTypes.string,
//   doctorAvatarSrc: PropTypes.string,
//   doctorJob: PropTypes.string,
//   doctorPhone: PropTypes.string,
// };

export default withStyles(styles)(PatientSidebar);