import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Card, CardContent } from '@material-ui/core';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});


const NewsDetailsCard = props => (
  <div>
    <Card>
      <CardContent>
        <div style={{ fontSize: '16px' }}>
          Written by: {props.author}  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;{props.date}
        </div>
        <div style={{ fontWeight: '700', fontSize: '32px' }}>{props.title}</div>
        <img
          src="https://farm5.staticflickr.com/4201/34419908534_43217ace18_z.jpg"
          alt={'img'}
          style={{ width: '100%', height: 'auto' }}
        />
        <div>{props.text}</div>
      </CardContent>
    </Card>
    <br />
  </div>
);

export default withStyles(styles)(NewsDetailsCard);
