import React from 'react';
// import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
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


const RecentNewsBar = props => (
  <Grid container alignItems="center" direction="column" spacing={8}>
    <Grid item>
      Other articles
    </Grid>
    <Grid item>
      <NewsCard date="2.03.2016" title="The war still causes hundred of deaths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
                amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus."
                author="Mario Rossi"
      />
    </Grid>
    <Grid item>
      <NewsCard date="2.03.2016" title="The war still causes hundred of deaths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
            amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus."
                author="Mario Rossi" />
    </Grid>
    <Grid item>
      <NewsCard date="2.03.2016" title="The war still causes hundred of deaths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
                     amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus."
                author="Mario Rossi" />
    </Grid>
    <Grid item>
      <NewsCard date="2.03.2016" title="The war still causes hundred of deaths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
                     amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus."
                author="Mario Rossi" />
    </Grid>
    <Grid item>
      <NewsCard date="2.03.2016" title="The war still causes hundred of deaths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
                     amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus."
                author="Mario Rossi" />
    </Grid>
    <Grid item>
      <NewsCard date="2.03.2016" title="The war still causes hundred of deaths"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit
                     amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus."
                author="Mario Rossi" />
    </Grid>
  </Grid>
);

export default withStyles(styles)(RecentNewsBar);
