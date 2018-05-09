import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form/index';
import { Grid, IconButton, Input, Slide } from 'material-ui';
import { InputAdornment } from 'material-ui/Input/index';


const styles = {
  form: {
    fontSize: 16,
    width: '100%',
  },
};

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayInput: false,
    };
  }

  render() {
    return (
      <Grid container alignItems="center" justify="flex-end">
        <Grid item>
          <Slide direction="down" in={this.state.displayInput} mountOnEnter unmountOnExit>
            <FormControl className={this.props.classes.form}>
              <Input
                type="text"
                value={this.state.value}
                placeholder={this.props.placeholder}
              />
            </FormControl>
          </Slide>
        </Grid>
        <Grid item>
          <IconButton onClick={() => this.setState({ displayInput: !this.state.displayInput })}>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

HeaderSearch.defaultProps = {
  classes: {
    form: {},
  },
  placeholder: 'Search something',
  onSearch: null,
};

HeaderSearch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default withStyles(styles)(HeaderSearch);
