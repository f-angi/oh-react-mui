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


class Collague extends React.Component {
  state = { expanded: false };

  constructor(props) {
    super(props);
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <Card raised onClick={this.handleExpandClick}
            style={{ width: "300px", float: "left" }}>
        <CardHeader align="center" subheader={this.props.sex}
                    title={<Typography variant="title" color="textSecondary"
                                       noWrap><strong>Dr. {this.props.doctorName}</strong></Typography>} />
        <Lens style={{ width: "50%", height: "50%", marginLeft: "25%" }} />
        <CardContent align="center">
          <Typography gutterBottom color="inherit" noWrap>{this.props.doctorType}<b>{this.props.lastAddition}</b>
          </Typography>
          <Typography color="inherit" variant="subheading" noWrap style={{ fontSize: "10px" }}><Phone
            style={{ width: "10px", height: "10px" }} />
            {this.props.phoneNumber}
          </Typography>
          <Typography color="inherit" variant="subheading" noWrap style={{ fontSize: "10px" }}><Email
            style={{ width: "10px", height: "10px" }} /> {this.props.email}
          </Typography>
        </CardContent>
        <div align="center"><Divider style={{ width: "250px" }} /></div>
        <Collapse in={this.state.expanded}>
          <CardContent align="center">
            <Typography color="textSecondary" variant="aside">
              <strong> LAST PATIENTS VISITED </strong>
            </Typography>
            <Grid container justify="center">
              <Grid container spacing={16}>
                <Grid item>
                  <Lens style={{ width: "50px", height: "50px", float: "left", marginLeft: "-20px" }} />
                  <Typography color="textSecondary" variant="aside"
                              style={{ float: "left", marginTop: "10px" }}>
                    <strong>{this.props.lastPatient1.name}</strong><br />{this.props.lastPatient1.surname}
                  </Typography>
                  <Lens style={{ width: "50px", height: "50px", float: "left", marginLeft: "10px" }} />
                  <Typography color="textSecondary" variant="aside"
                              style={{ float: "left", marginTop: "10px" }}>
                    <strong>{this.props.lastPatient2.name}</strong><br />{this.props.lastPatient2.surname}
                  </Typography>
                </Grid>
                <Grid item>
                  <Lens
                    style={{ width: "50px", height: "50px", float: "left", marginLeft: "-20px", marginTop: "-10px" }} />
                  <Typography color="textSecondary" variant="aside"
                              style={{ float: "left", marginTop: "10px", marginTop: "-5px" }}>
                    <strong>{this.props.lastPatient3.name}</strong><br />{this.props.lastPatient3.surname}
                  </Typography>
                  <Lens
                    style={{ width: "50px", height: "50px", float: "left", marginLeft: "10px", marginTop: "-10px" }} />
                  <Typography color="textSecondary" variant="aside"
                              style={{ float: "left", marginTop: "10px", marginTop: "-5px" }}>
                    <strong>{this.props.lastPatient4.name}</strong><br />{this.props.lastPatient4.surname}
                  </Typography>
                  <Grid item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center">
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

export default withStyles(styles)(Collague);