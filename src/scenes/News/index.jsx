import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid, Paper, Divider } from '@material-ui/core';
import Header from '../../components/Header';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
import NewsFilter from '../../components/NewsFilter';
import NewsBar from '../../components/NewsBar';
import NewsCard from '../../components/NewsCard';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
});

const News = props => (
  <div>
    <Grid container justify="center" alignItems="stretch">
      <Grid item xs={12} lg={10}>
        <Header username={props.username} hospitalName={props.hospitalName} value={6} />
        <Paper elevation={4} className={props.classes.appFramePaper}>
          <NewsBar />
          <br />
          <Divider />
          <br />
          <br />
          <br />
          <NewsFilter />
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Grid container spacing={24} justify="center" direction="row" alignItems="center">
                <Grid item>
                  <NewsCard
                    date="2.03.2016"
                    title="The war still causes hundred of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
                     amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
                <Grid item>
                  <NewsCard
                    date="22.04.2016"
                    title="The war still causes hundreds of deaths"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                     Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
                     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                    author="Mario Rossi"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    <ChatFloatingPopup />
  </div>
);

export default withStyles(styles)(News);
