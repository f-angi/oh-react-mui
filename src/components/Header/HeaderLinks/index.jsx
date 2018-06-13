import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Tab, Tabs } from '@material-ui/core';

const styles = theme => ({
  root: {
    paddingLeft: 110,
  },
  tabs: {
    minHeight: 0,
  },
  tab: {
    textTransform: 'none',
    height: 30,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
  },
  label: {
    fontSize: theme.typography.subheading.fontSize,
  },
  labelContainer: {
    // [theme.breakpoints.up('xs')]: {
    paddingLeft: 12,
    paddingRight: 12,
    // },
  },
});

// const HeaderLinks = props => (
//   <Grid container alignItems="center" justify="space-between" className={props.classes.root}>
//     {props.links.map(link => <Grid item style={{paddingRight: 20}}>{link}</Grid>)}
//   </Grid>
// );
//

const HeaderLinks = props => (
  <Tabs
    indicatorColor="primary"
    fullWidth
    value={props.value}
    className={props.classes.tabs}
  >
    {props.links.map(link => (<Tab
      key={link}
      label={link}
      className={props.classes.tab}
      classes={
        {
          root: props.classes.tab,
          labelContainer: props.classes.labelContainer,
          label: props.classes.label,
        }
      }
    />))}
  </Tabs>
);

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(HeaderLinks);
