import React from 'react';
// import PropTypes from 'prop-types';
// import AppFrame from '../../components/AppFrame';
// import PatientRegistration from '../PatientRegistration'
// import PatientVisit from '../PatientVisit';
import PatientAdmission from '../PatientAdmission';

const Dashboard = props => (
  // <AppFrame username={props.username} hospitalName={props.hospitalName} />
  // <PatientRegistration username={props.username} hospitalName={props.hospitalName} />
  // <PatientVisit username={props.username} hospitalName={props.hospitalName} />
  <PatientAdmission username={props.username} hospitalName={props.hospitalName} />
);

export default Dashboard;
