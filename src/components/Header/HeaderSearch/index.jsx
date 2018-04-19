import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form/index';
import { IconButton, Input } from 'material-ui';
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
      value: '',
    };
  }

  render() {
    return (
      <FormControl className={this.props.classes.form }>
        <Input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ ...this.state, value: e.target.value })}
          onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.props.onSearch(this.state.value);
                        }
                    }}
          placeholder={this.props.placeholder}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
                    }
        />
      </FormControl>
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
