import React from 'react';
import {
  Grid,
  Card,
  Typography,
  CardHeader,
  CardContent,
  Collapse,
  Divider,
} from '@material-ui/core';
import Lens from '@material-ui/icons/Lens';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});


class Patient extends React.Component {
  state = { expanded: false };

  constructor(props) {
    super(props);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    // const { classes } = this.props;

    return (
      <Card raised onClick={this.handleExpandClick}
            style={{ width: '300px', float: 'left' }}>
        <CardHeader align="center" subheader={this.props.sex}
                    title={<Typography variant="title" color="textSecondary"
                                       noWrap><strong>{'PID: ' + this.props.pid + ' - OPD: ' + this.props.opd}</strong></Typography>} />
        <Lens style={{ width: '50%', height: '50%', marginLeft: '25%' }} />
        <CardContent align="center">
          <Typography gutterBottom color="inherit" noWrap> Last addition: <b>{this.props.lastAddition}</b>
          </Typography>
          <Typography color="inherit" variant="subheading" noWrap> Reason for the
            visit: <br /><b>{this.props.reason}</b>
          </Typography>
        </CardContent>
        <div align="center"><Divider style={{ width: '250px' }} /></div>
        <Collapse in={this.state.expanded}>
          <CardContent align="center">
            <Typography color="textSecondary" variant="body1">
              <strong> LAST DOCTOR THAT VISITED THE PATIENT </strong>
            </Typography>
            <Grid container justify="center">
              <Grid container spacing={16}>
                <Grid item>
                  <Lens style={{ width: '50px', height: '50px', float: 'left' }} />
                </Grid>
                <Grid item>
                  <Typography color="textSecondary" variant="body1"
                              style={{ float: 'left', marginLeft: '15px', marginTop: '10px' }}>
                    <strong>Dr.{this.props.lastDoctor}</strong><br />{this.props.type}

                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography color="textSecondary" variant="body1"
                            style={{ float: 'left', marginTop: '10px' }}>
                  <Email style={{ width: '11px', height: '11px', marginLeft: '15px' }} />
                  {' ' + this.props.mail}
                  <br />
                  <Phone style={{ width: '10px', height: '10px', marginLeft: '15px', marginTop: '5px' }} />
                  {' ' + this.props.phoneNumber}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

export default withStyles(styles)(Patient);
