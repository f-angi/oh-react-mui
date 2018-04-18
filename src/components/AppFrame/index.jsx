import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import Header from '../../components/Header';

const styles = theme => ({
  mainPaper: {
    background: theme.palette.background.contentFrame,
    padding: theme.spacing.unit * 4,
  },
  mainContainer: {
    [theme.breakpoints.up('lg')]: {
      marginTop: -140,
    },
  },
});

const AppFrame = props => (
  <div>
    <Header username={props.username} hospitalName={props.hospitalName} />
  </div>
);

// AppFrame.defaultProps = {
//   classes: {},
//   title: 'HelpDesk',
//   breadcrumbs: [],
//   children: null,
// };
//
// AppFrame.propTypes = {
//   breadcrumbs: PropTypes.arrayOf(PropTypes.any),
//   children: PropTypes.node,
//   classes: PropTypes.objectOf(PropTypes.any),
//   title: PropTypes.string,
// };

export default withStyles(styles)(AppFrame);
