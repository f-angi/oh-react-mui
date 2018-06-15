import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  Paper,
  Select,
  TextField,
} from '@material-ui/core';
import {
  ListItemText,
  MenuItem,
  Input,
} from '@material-ui/core/es/index';
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import Sidebar from '../../components/PatientSidebar';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
  button: {
    margin: theme.spacing.unit,
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
  },
  title: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: 0,
  },
});

class LaboratoryTestPrescrizione extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedNO: true,
      checkedCronic: true,
      name: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect = event => {
    this.setState({ name: event.target.value });
  };

  handleChange = name => event => {
    let change = !this.state[name];
    this.setState({ [name]: change });
  };

  render() {
    // Select per laboratory tests
    const laboratoryTests = ['TEST 1', 'TEST 2', 'TEST 3', 'TEST 4', 'TEST 5'];
    const { classes } = this.props;
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    return (
      <div>
        <Grid container justify='center' alignItems='stretch'>
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path="Home / Patient Database / LaboratoryTest" txt="" />
              <Grid container spacing={24} className={classes.containerWhite}>
                <Grid item xs={6} md={2} className={'mobile-view-large'}
                      style={{ backgroundColor: 'rgba(94, 94, 94, 1)' }}>
                  <Sidebar
                    patientID={'32040'} OPD={'8937821'} bloodGroup={'A+'}
                    patientName={this.props.patientName} patientAvatarSrc={null}
                    notes={['Pneumonia and malnutrition', 'Grasses, Gluten']}
                    cronic={this.state.checkedCronic} // cronicOnChange={this.handleChange}
                    lastAdmission={'22.01.2016'} reason={'Pneumonia and malnutrition'}
                    treatment={'Pneumond malnutrition'} doctorAvatarSrc={null}
                    doctorName={'Dr. Meredith Greys'} doctorJob={'Pneumologis'} doctorPhone={'3453829043'}
                  />
                </Grid>
                {/* RIGHT SUBCOLOUM */}
                <Grid item xs={12} md={10}>
                  <h4 style={{ color: 'rgb(121, 126, 132)' }}>COMPLETE THE FORM</h4>
                  <br />
                  <h5 className={classes.title}> Prescribe laboratory test/s </h5>
                  {/* LABORATORY TEST HIDDEN */}
                  <FormControl className={classes.formControl}>
                    <h4>Select one or more laboratory test</h4>
                    <Select
                      multiple
                      value={this.state.name}
                      onChange={this.handleChangeSelect}
                      input={<Input id="test-multiple-checkbox" />}
                      renderValue={selected => selected.join(', ')}
                      MenuProps={MenuProps}
                    >
                      {laboratoryTests.map((name, index) => (
                        <MenuItem key={index} value={name}>
                          <Checkbox checked={this.state.name.indexOf(name) > -1} color="primary" />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <br />
                  {/* REASON OF VISIT */}
                  <TextField
                    required
                    multiline
                    id="Notes"
                    label="Notes"
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                  />
                  {/* SAVE AND START VISIT BUTTON */}
                  <Button variant="raised" component="span"
                          className={classes.buttonInlineDuo}
                          style={{
                            marginTop: '15px',
                            backgroundColor: 'rgba(239, 156, 102, 1)',
                            color: '#FFFFFF',
                          }}>
                    Save and prescribe exam
                  </Button>
                  {/* SAVE THE INFORMATION */}
                  <Button variant="raised" component="span"
                          className={classes.buttonInlineDuo}
                          style={{
                            marginTop: '15px',
                            borderColor: '#rgba(239, 156, 102, 1)',
                            color: 'rgba(239, 156, 102, 1)',
                          }}>
                    Print the visit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <ChatFloatingPopup />
      </div>
    );
  }
}

LaboratoryTestPrescrizione.defaultProps = {
  patientName: 'Modotoky Tokaiia',
  provenance: 'District, Village',
};
LaboratoryTestPrescrizione.propTypes = {
  classes: PropTypes.object.isRequired,
  patientName: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
};

export default withStyles(styles)(LaboratoryTestPrescrizione);
