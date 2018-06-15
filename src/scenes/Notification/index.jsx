import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Paper,
  Divider,
} from '@material-ui/core';
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import CardNotification from '../../components/CardNotification';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
      marginBottom: '80px',
    }),
  button: {
    margin: theme.spacing.unit,
    float: 'right',
    marginTop: '-45px',
  },

  button2: {
    margin: theme.spacing.unit,
    marginLeft: '40%',
    marginTop: '50px',
    width: '20%',
  },
  buttonInlineDuo: {
    margin: theme.spacing.unit,
    width: '44%',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '93%',
  },
  marginRight: {
    marginRight: theme.spacing.unit * 2,
  },
  containerWhite: {
    backgroundColor: 'white',
    boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    marginBottom: '70px',
    marginTop: '20px',
  },
  title: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: 0,
  },
  leftAlign: {
    marginLeft: '10px',
    width: '30%',
  },
  all: {
    width: '100%',
  },
  divider: {
    backgroundColor: 'black',
  },
});

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify='center' alignItems='stretch'>
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path="Home / Notification" txt="" />
              <Grid container spacing={24}>
                <div className={classes.all}>
                  <h3 className={classes.leftAlign}> Notification </h3>
                  <Button variant="contained" color="primary" className={classes.button}>
                    SETTING NOTIFICATION
                  </Button>
                  <Divider className={classes.divider} />
                </div>
                <CardNotification
                  title={'Article1'}
                  date={'29 September 2000'}
                  article={'This impressive paella is a perfect party dish and a fun meal to cook together with your guests Add 1 cup of frozen peas along with the mussels, if you like  that was first spoken in early medieval England and i'}
                  notes={'Follow the instructions to embed the icon font in your site and learn how to style your icons English is a West Germanic language that was first spoken in early medieval England and is now a global lingua franca. Named after the A'}
                />
                <CardNotification
                  title={'Article2'}
                  date={'29 October 2643'}
                  article={'The English Composition sequence, part of Kents Core Requirements, is designed to introduce and provide experience in academic writing based upon the '}
                  notes={'kipedia has an article on: description'} />
                <CardNotification
                  title={'Article3'}
                  date={'55 October 2546'}
                  article={'description definition: 1. something that tells you what something or someone is like: 2. of all types: 3. to be something that you cannot describe accurately .'}
                  notes={'Six reference English levels defined by CEFR. Description and alignment with other English assessments- Cambridge, IELT'}
                />
              </Grid>
              <Button variant="outlined" className={classes.button2}>
                LOAD MORE
              </Button>
            </Paper>
          </Grid>
        </Grid>
        <ChatFloatingPopup />
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notification);
