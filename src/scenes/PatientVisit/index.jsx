import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Select,
  TextField,
  ExpansionPanel,
  ExpansionPanelDetails,
  FormGroup,
  ListItemText,
  MenuItem,
  Input,
} from '@material-ui/core';
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import PatientSidebar from '../../components/PatientSidebar/index';
import PatientRightMainBar from '../../components/PatientRightMainBar/index';

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
    minWidth: '44%',
  },
  buttonInlineLarge: {
    margin: theme.spacing.unit,
    minWidth: '50%',
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
  titles: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class PatientVisit extends React.Component {
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
    // Select per laboratory tests
    const laboratoryTests = ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4', 'List Item 5'];

    return (
      <div>
        <Grid container justify='center' alignItems='stretch'>
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} value={1} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path="Home / Patient Database / Patient details / Patient visit" txt="" />
              <Grid container spacing={24} className={classes.containerWhite}>

                {/* LEFT SUBCOLOUM */}
                <Grid item xs={6} md={2} className={'mobile-view-large'}
                      style={{ backgroundColor: 'rgba(94, 94, 94, 1)' }}>
                  <PatientSidebar
                    patientID={'32040'} OPD={'8937821'} bloodGroup={'A+'} isMan={true}
                    patientName={this.props.patientName} patientAvatarSrc={null}
                    notes={['Pneumonia and malnutrition', 'Grasses, Gluten']}
                    cronic={this.state.checkedCronic} //cronicOnChange={this.handleChange}
                    lastAdmission={'22.01.2016'} reason={'Pneumonia and malnutrition'}
                    treatment={'Pneumond malnutrition'} doctorAvatarSrc={null}
                    doctorName={'Dr. Meredith Greys'} doctorJob={'Pneumologis'} doctorPhone={'3453829043'}
                  />
                </Grid>

                {/* RIGHT SUBCOLOUM */}
                <Grid item xs={12} md={10}>
                  <PatientRightMainBar
                    patientName={this.props.patientName}
                    provenance={this.props.provenance}
                    mainTitle={'COMPLETE THE FORM'}
                  />
                  {/* REASON OF VISIT */}
                  <TextField
                    required
                    multiline
                    id="reason-of-visit"
                    label="Reason of visit"
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                  />
                  {/* BROWSE ICD BUTTON */}
                  <Button
                    variant="raised"
                    component="span"
                    className={classes.buttonInlineLarge}
                  >
                    BROWSE THE ICD 10
                  </Button>
                  {/* DIAGNOSIS */}
                  <TextField
                    required
                    multiline
                    id="textarea"
                    label="Diagnosis"
                    className={classes.textField}
                    margin="normal"
                  />
                  {/* THERAPY BUTTON */}
                  <Button
                    variant="raised"
                    component="span"
                    className={classes.button}
                  >
                    THERAPY
                  </Button>
                  <br />
                  {/* DRUGS PRESCRIBED */}
                  <TextField
                    multiline
                    id="drug-prescribed"
                    label="Drugs prescribed"
                    placeholder="Describe here which kind of drugs are needed. Please remind me to write the quantity."
                    rows="4"
                    className={classes.textField}
                    margin="normal"
                  />
                  {/* NOTE */}
                  <TextField
                    required
                    multiline
                    id="textarea"
                    label="Notes"
                    className={classes.textField}
                    margin="normal"
                  />

                  {/* PRESCRIVE TEST */}
                  <FormGroup className={classes.titles} row>
                    <p className={classes.marginRight}>Prescribe laboratory test/s</p>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={!this.state.checkedNO}
                          onChange={this.handleChange('checkedNO')}
                          value="checkedYes"
                          color="primary"
                        />
                      }
                      label="Yes, it is necessary"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.checkedNO}
                          onChange={this.handleChange('checkedNO')}
                          value="checkedNo"
                          color="primary"
                        />
                      }
                      label="No, it is not necessary"
                    />
                  </FormGroup>
                  {/* LABORATORY TEST HIDDEN */}
                  <ExpansionPanel expanded={!this.state.checkedNO}>
                    <ExpansionPanelDetails>
                      <FormControl className={classes.formControl}>
                        <h5>Select one or more laboratory test</h5>
                        <Select
                          multiple
                          value={this.state.name}
                          onChange={this.handleChangeSelect}
                          input={<Input id="select-multiple-checkbox" />}
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
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  {/* SAVE AND START VISIT BUTTON */}
                  <Button
                    variant="raised"
                    component="span"
                    className={classes.buttonInlineDuo}
                    style={{
                      marginTop: '15px',
                      backgroundColor: 'rgba(239, 156, 102, 1)',
                      color: '#FFFFFF',
                    }}
                  >
                    Save and prescribe exam
                  </Button>
                  {/* SAVE THE INFORMATION */}
                  <Button
                    variant="raised"
                    component="span"
                    className={classes.buttonInlineDuo}
                    style={{
                      marginTop: '15px',
                      borderColor: '#rgba(239, 156, 102, 1)',
                      color: 'rgba(239, 156, 102, 1)',
                    }}
                  >
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

PatientVisit.defaultProps = {
  patientName: 'Modotoky Tokaiia',
  provenance: 'District, Village',
  hospitalName: 'Hospital St. Democrito',
};

PatientVisit.propTypes = {
  classes: PropTypes.object.isRequired,
  patientName: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
  hospitalName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PatientVisit);
