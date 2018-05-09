import React from 'react';

import { withStyles } from 'material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from 'material-ui';
import DrawerMenu from '../../DrawerMenu';

const styles = theme => ({
  icon: {
    fontSize: 48,
    // marginRight: 10,
  },
});

class HeaderLinksHamburger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.toggleDrawer}>
          <MenuIcon className={this.props.classes.icon} />
        </IconButton>
        <DrawerMenu open={this.state.open} toggleDrawer={this.toggleDrawer} links={this.props.links} />
      </div>
    );
  }
}


export default withStyles(styles)(HeaderLinksHamburger);
