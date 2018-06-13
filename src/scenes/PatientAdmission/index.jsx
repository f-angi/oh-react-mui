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
  MenuItem,
  ExpansionPanel,
  ExpansionPanelDetails,
  FormGroup,
  ListItemText,
  Input,
} from "@material-ui/core";
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import PatientSidebar from '../../components/PatientSidebar/index';
import AutocompleteField from '../../components/AutocompleteField/index';
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
  buttonInlineLarge: {
    margin: theme.spacing.unit,
    minWidth: '50%',
  },
  buttonFull: {
    margin: theme.spacing.unit,
    width: '90%',
    marginTop: 15,
  },
  backgroundOrange: {
    backgroundColor: "rgba(239, 156, 102, 1)",
    color: "#FFFFFF",
  },
  borderOrange: {
    borderColor: '#rgba(239, 156, 102, 1)',
    color: "rgba(239, 156, 102, 1)",
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

class PatientAdmission extends React.Component {
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
    // Elementi per select laboratory tests
    const laboratoryTests = ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4', 'List Item 5'];
    // Array per autocomplete da passare come props
    const suggestions = [
      { label: 'Item 1' },
      { label: 'Item 2' },
      { label: 'Item 3' },
    ];

    return (
      <div>
        <Grid container justify='center' alignItems='stretch'>
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} value={1} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path="Home / Patient Database / Patient details / Patient admission" txt="" />
              <Grid container spacing={24} className={classes.containerWhite}>

                {/* LEFT SUBCOLOUM */}
                <Grid item xs={6} md={2} className={"mobile-view-large"}
                      style={{ backgroundColor: "rgba(94, 94, 94, 1)" }}>
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
                    mainTitle={"COMPLETE THE FORM"}
                  />

                  <Grid container spacing={16}>
                    {/* LEFT SUB-SUBCOLOUMN */}
                    <Grid item xs={12} sm={6}>
                      <div className={classes.button}>
                        <label htmlFor={"incoming-diagnosis"}>Incoming diagnosis</label>
                        <AutocompleteField
                          id="incoming-diagnosis"
                          placeholder="Start typing..."
                          suggestionsList={suggestions}
                          //onChange={this.onChange}
                        />
                        <label htmlFor={"type-admission"}>Type of admission</label>
                        <AutocompleteField
                          id="type-admission"
                          placeholder="Start typing..."
                          suggestionsList={suggestions}
                          //onChange={this.onChange}
                        />
                      </div>
                    </Grid>

                    {/* RIGHT SUB-SUBCOLOUMN */}
                    <Grid item xs={12} sm={6}>
                      {/* ADMISSION DATE */}
                      <TextField
                        required
                        id="admission-date"
                        label="Admission date"
                        placeholder={"yyyy/mm/dd"}
                        //onChange={this.handleChange('age')}
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        margin="normal"
                        style={{ marginTop: 27 }}
                      />
                      {/* BROWSE ICD BUTTON */}
                      <Button
                        variant="raised"
                        component="span"
                        className={classes.buttonInlineLarge}
                        style={{ marginTop: 45, marginBottom: 80 }}
                      >
                        BROWSE THE ICD 10
                      </Button>
                    </Grid>
                  </Grid>

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
                  <FormGroup row className={classes.titles}>
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
                          value="checkedNO"
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

                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      {/* SAVE THE ADMISSION */}
                      <Button variant="raised" component="span"
                              className={`${classes.buttonFull} ${classes.backgroundOrange}`}
                        /* STYLE HARDCODED altrimenti l'hover del mouse colora di grigio il bottone */
                              style={{
                                backgroundColor: "rgba(239, 156, 102, 1)",
                                color: "#FFFFFF",
                              }}
                      >
                        Save the admission
                      </Button>
                      {/* PRINT THE ADMISSION */}
                      <Button variant="raised" component="span"
                              className={`${classes.buttonFull} ${classes.borderOrange}`}
                      >
                        Print the admission
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* PAY THE BILL */}
                      <Button variant="raised" component="span"
                              className={`${classes.buttonFull} ${classes.borderOrange}`}
                      >
                        $ Pay the bill
                      </Button>
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
  }
}

PatientAdmission.defaultProps = {
  patientName: 'Modotoky Tokaiia',
  provenance: 'District, Village',
  hospitalName: 'Hospital St. Democrito',
};

PatientAdmission.propTypes = {
  classes: PropTypes.object.isRequired,
  patientName: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
  hospitalName: PropTypes.string.isRequired,
};

export default withStyles(styles)(PatientAdmission);
