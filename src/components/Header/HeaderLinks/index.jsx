import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Grid } from 'material-ui';

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

const HeaderLinks = props => (
  <Grid container justify="flexStart">
    {props.links.map(link => <Grid item style={{paddingRight: 20}}>{link}</Grid>)}
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

export default withStyles(styles)(HeaderLinks);
