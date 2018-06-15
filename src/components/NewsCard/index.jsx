import React from 'react';
import {
  Card,
  Typography,
  CardContent,
  Collapse,
  Divider,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles/index';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});


class NewsCard extends React.Component {
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
            style={{ width: '299px', float: 'left' }}>
        <CardContent align="center">
          <Typography style={{ float: 'left', fontSize: '10px' }}>{this.props.date}</Typography>
          <br />
          <Typography gutterBottom color="inherit"
                      style={{ color: '#EF9969', fontSize: '16px' }}>{this.props.title}</Typography>
          <Typography color="inherit" variant="subheading" noWrap style={{ float: 'left', fontSize: '10px' }}>Written
            by {this.props.author}<br />
          </Typography>
        </CardContent>
        <div align="center"><Divider style={{ width: '250px' }} /></div>
        <Collapse in={this.state.expanded}>
          <CardContent align="center">
            <Typography>{this.props.text}</Typography>
            <Typography style={{ color: '#EF9969', float: 'left' }}>Read all article ></Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
};


export default withStyles(styles)(NewsCard);
