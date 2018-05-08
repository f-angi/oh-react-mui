import React from 'react';

import { withStyles } from 'material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  icon: {
    fontSize: 36,
    paddingRight: 10,
  },
});

const HeaderLinksHamburger = props => (
  <MenuIcon className={props.classes.icon}/>
);


export default withStyles(styles)(HeaderLinksHamburger);
