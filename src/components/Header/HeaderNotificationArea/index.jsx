import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Badge, Grid } from 'material-ui';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';

const styles = theme => ({
  marginTop: {
    background: theme.palette.background.contentFrame,
    padding: theme.spacing.unit * 4,
  },
});

const HeaderNotificationArea = props => (
  <Grid container justify="flexEnd" spacing={24}>
    <Grid item>
      <Badge color="primary" badgeContent={4}><MailIcon /></Badge>
    </Grid>
    <Grid item>
      <Badge><FaceIcon /></Badge>
    </Grid>
  </Grid>
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

export default withStyles(styles)(HeaderNotificationArea);
