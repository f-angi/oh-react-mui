import React from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';

const Dashboard = props => (
  <AppFrame username={props.username} hospitalName={props.hospitalName} />
);

export default Dashboard;
