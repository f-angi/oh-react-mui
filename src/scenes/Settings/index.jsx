import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper, Button, Divider, TextField, Avatar } from '@material-ui/core';
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
    backgroundColor: 'white',
    boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    marginBottom: '70px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '93%',
  },
});

const Settings = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={0} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <SettingsBar />
          <Grid container spacing={24} className={props.classes.containerWhite}>

            <Grid item xs={6} md={2}>
              <h4>PANORAMIC</h4>
            </Grid>

            <Grid item xs={12} md={10} style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.12)' }}>
              <h4>PHOTO PROFILE</h4>
              <Avatar style={{ width: '130px', height: '130px', backgroundColor: 'black' }} />
              <Button style={{
                float: 'right',
                marginRight: '5%',
                backgroundColor: '#EF9969',
                color: 'white',
              }}
              >
                Modify
              </Button>
              <br />
              <Divider style={{ marginTop: '10px', float: 'right', width: '100%' }} />
              <br />
              <h4>GENERAL INFORMATION</h4>
              <div style={{ marginLeft: '20px', float: 'left', color: 'grey' }}>Username</div>
              <div style={{
                marginLeft: '10%',
                float: 'left',
                color: 'grey',
                fontWeight: '1000',
              }}
              >
                {props.username}
              </div>
              <Button style={{
                float: 'right',
                marginRight: '5%',
                backgroundColor: '#EF9969',
                color: 'white',
                marginTop: '-10px',
              }}
              >
                Modify
              </Button>
              <br />
              <Divider style={{ margin: '1%', width: '98%', float: 'right' }} />
              <br />
              <div style={{ marginLeft: '20px', float: 'left', color: 'grey' }}>Full name</div>
              <div style={{
                marginLeft: '10%',
                float: 'left',
                color: 'grey',
                fontWeight: '1000',
              }}
              >
                {props.fullName}
              </div>
              <Button style={{
                float: 'right',
                marginRight: '5%',
                backgroundColor: '#EF9969',
                color: 'white',
              }}
              >
                Modify
              </Button>
              <br />
              <br />
              <Divider style={{ marginTop: '10px', float: 'right', width: '101%' }} />
              <br />
              <h4>ROLE</h4>
              <div style={{ marginLeft: '20px', float: 'left', color: 'grey' }}>Profession</div>
              <div style={{
                marginLeft: '10%',
                float: 'left',
                color: 'grey',
                fontWeight: '1000',
              }}
              >
                {props.profession}
              </div>
              <Button style={{
                float: 'right',
                marginRight: '5%',
                backgroundColor: '#EF9969',
                color: 'white',
              }}
              >
                Modify
              </Button>
              <br />
              <Divider style={{ marginTop: '10px', float: 'right', width: '101%' }} />
              <br />
              <h4>DESCRIPTION</h4>
              <TextField
                multiline
                id="description"
                placeholder="Specific responsibilities vary greatly depending on the area of specialism. However, generic duties of the job include:
- undertaking patient consultations and physical examinations
- organising workloads
- performing surgical procedures
- providing general pre- and post-operative care
- monitoring and administering medication
- assessing and planning treatment requirements
- liaising daily with staff including other doctors, non-medical management staff and healthcare professionals
- writing reports and maintaining records
- promoting health education"
                rows="10"
                className={props.classes.textField}
                margin="normal"
              />
              <Button style={{
                float: 'right',
                marginRight: '5%',
                backgroundColor: '#EF9969',
                color: 'white',
              }}
              >
                Save
              </Button>
            </Grid>

          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <ChatFloatingPopup />
  </div>
);

export default withStyles(styles)(Settings);
