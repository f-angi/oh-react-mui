import React from 'react';

import { withStyles } from 'material-ui/styles';
import { Badge, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import DrawerSearch from './DrawerSearch';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';


const styles = theme => ({
  drawerList: {
    width: 400,
  },
});

const DrawerMenu = props => (
  <Drawer anchor="right" open={props.open} onClose={props.toggleDrawer}>
    <div className={props.classes.drawerList}>
      <List>
        <div>
          {props.links.map(link => (
            <ListItem button>
              <ListItemText primary={link} />
            </ListItem>))}
        </div>
      </List>
      <Divider />
      <List>
        <div>
          <ListItem button>
            <ListItemIcon>
              <Badge color="primary" badgeContent={4}><NotificationsIcon /></Badge>
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Badge color="primary" badgeContent={8}><ChatIcon /></Badge>
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Badge><EventNoteIcon /></Badge>
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Badge><SettingsIcon /></Badge>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </div>
      </List>
      <Divider />
      <List>
        <div>
          <ListItem button>
            <DrawerSearch />
          </ListItem>
        </div>
      </List>
    </div>
  </Drawer>
);

export default withStyles(styles)(DrawerMenu);
