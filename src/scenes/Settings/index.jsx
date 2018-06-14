import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper, Button, Divider } from '@material-ui/core';
import Lens from '@material-ui/icons/Lens';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import SettingsBar from '../../components/SettingsBar';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
  containerWhite: {
    backgroundColor: "white",
    boxShadow: "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    marginBottom: "70px"
  },
});

class Settings extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} value={7} />
            <Paper elevation={4} className={this.props.classes.appFramePaper}>
              <SettingsBar />
              <Grid container spacing={24} className={this.props.classes.containerWhite}>
                <Grid item xs={6} md={2}>
                  <h4>PANORAMIC</h4>
                </Grid>
                <Grid item xs={12} md={10} style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>
                  <h4>PHOTO PROFILE</h4>
                  <Lens style={{ width: "130px", height: "130px" }} />
                  <Button style={{ marginLeft: "92%", backgroundColor: "#EF9969", color: "white" }}>Modify</Button>
                  <br />
                  <Divider style={{ marginTop: "10px", float: "right", width: "101%" }} />
                  <br />
                  <h4>GENERAL INFORMATION</h4>
                  <div style={{ marginLeft: "20px", float: "left", color: "grey" }}>Username</div>
                  <div style={{
                    marginLeft: "30%",
                    float: "left",
                    color: "grey",
                    fontWeight: "1000"
                  }}>{this.props.username}</div>
                  <Button style={{
                    marginLeft: "92%",
                    backgroundColor: "#EF9969",
                    color: "white",
                    marginTop: "-50px"
                  }}>Modify</Button>
                  <br />
                  <Divider style={{ width: "98%", float: "right" }} />
                  <br />
                  <div style={{ marginLeft: "20px", float: "left", color: "grey" }}>Full name</div>
                  <div style={{
                    marginLeft: "30%",
                    float: "left",
                    color: "grey",
                    fontWeight: "1000"
                  }}>{this.props.fullName}</div>
                  <Button style={{
                    marginLeft: "92%",
                    backgroundColor: "#EF9969",
                    color: "white",
                    marginTop: "-20px"
                  }}>Modify</Button>
                  <br />
                  <br />
                  <Divider style={{ marginTop: "10px", float: "right", width: "101%" }} />
                  <br />
                  <h4>ROLE</h4>
                  <div style={{ float: "left", marginLeft: "10px", color: "grey" }}>Profession</div>
                  <div style={{
                    marginLeft: "30%",
                    float: "left",
                    color: "grey",
                    fontWeight: "1000"
                  }}>Gynecologist{this.props.profession}</div>
                  <Button style={{
                    marginLeft: "92%",
                    backgroundColor: "#EF9969",
                    color: "white",
                    marginTop: "-50px"
                  }}>Modify</Button>
                  <br />
                  <Divider style={{ marginTop: "10px", float: "right", width: "101%" }} />
                  <br />
                  <h4>DESCRIPTION</h4>
                  <textarea style={{ width: "700px", height: "500px" }}>{this.props.description}</textarea>
                  <Button style={{ marginLeft: "87%", backgroundColor: "#EF9969", color: "white" }}>Save</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <ChatFloatingPopup />
      </div>
    );
  }
}

export default withStyles(styles)(Settings);
