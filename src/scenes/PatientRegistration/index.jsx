import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import {
  Button, Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Select,
  TextField
} from '@material-ui/core';
import { InsertPhoto, PhotoCamera } from "@material-ui/icons/es/index";

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
  root:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  button: {
    margin: theme.spacing.unit,
  },
  buttonInlineDuo: {
    margin: theme.spacing.unit,
    width: "44%"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "93%",
  },
  textFieldThree: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "28%",
  },
  menu: {
    width: 200,
  },
  containerWhite: {
    backgroundColor: "white",
    boxShadow: "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    marginBottom: "70px"
  },
  titles: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

// Array per select gruppo sanguigno
const bloodGroup = ["", "0+", "0-", "A+", "A-", "B+", "B-", "C+", "C-", "AB+", "AB-"];

class PatientRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transport1: false,
      transport2: false,
      transport3: false,
    };
  }

  handleChangeTransport = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path={"Home / Patient Database / Patient Registration"} txt={""} />
              <Grid container spacing={24} className={classes.containerWhite}>
                <Grid item xs={6} md={2}>
                  <h4>NEW PATIENT REGISTRATION</h4>
                </Grid>
                <Grid item xs={12} md={10}>
                  <h5 className={classes.titles}>
                    All fields with * are mandatory. Patient data will be saved within the archive
                    patients.
                    At the end of the process you will be able to register a visit.
                  </h5>
                  <Grid container spacing={16}>

                    {/* LEFT SUBCOLOUMN */}
                    <Grid item xs={12} sm={6}>

                      {/* TAKE PHOTO */}
                      <input
                        accept="image/*"
                        className={classes.input}
                        style={{ display: "none" }}
                        id="raised-button-file"
                        type="file"
                      />
                      <label htmlFor="raised-button-file">
                        <Button variant="raised" component="span"
                                className={classes.buttonInlineDuo}>
                          Take a photo of the patient
                          <IconButton color="primary" className={classes.button}
                                      component="span">
                            <PhotoCamera />
                          </IconButton>
                        </Button>
                      </label>

                      {/* GALLERY */}
                      <Button variant="raised"
                              component="span" className={classes.buttonInlineDuo}>
                        Go to gallery
                        <IconButton color="primary" className={classes.button}
                                    component="span">
                          <InsertPhoto />
                        </IconButton>
                      </Button>
                      <br />
                      {/* FIRST NAME */}
                      <TextField
                        required
                        id="first-name"
                        label="First Name"
                        className={classes.textField}
                        margin="normal"
                        color={"primary"}
                      />
                      <br />
                      {/* AGE */}
                      <TextField
                        required
                        id="age-yyy"
                        label="Age"
                        placeholder={"Years"}
                        //onChange={this.handleChange('age')}
                        type="number"
                        className={classes.textFieldThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      {/* AGE BLOCK THREE INPUT */}
                      <TextField
                        required
                        id="age-mm"
                        placeholder={"Months"}
                        //onChange={this.handleChange('age')}
                        type="number"
                        className={classes.textFieldThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      <TextField
                        required
                        id="age-dd"
                        placeholder={"Days"}
                        //onChange={this.handleChange('age')}
                        type="number"
                        className={classes.textFieldThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      {/* BIRTHDATE */}
                      <TextField
                        required
                        id="birthdate"
                        label="Birthdate"
                        placeholder={"yyyy/mm/dd"}
                        //onChange={this.handleChange('age')}
                        type="date"
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true
                        }}
                        margin="normal"
                      />
                      <br />
                      {/* TAX NUMBER */}
                      <TextField
                        required
                        id="tax-number"
                        label="Tax number"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* CITY */}
                      <TextField
                        required
                        id="city"
                        label="City"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* CONTACT */}
                      <TextField
                        required
                        id="contact"
                        label="Contact"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* NEXT OF KIN */}
                      <TextField
                        required
                        id="next-of-kin"
                        label="Next Of Kin"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />

                    </Grid>

                    {/* RIGHT SUBCOLOUMN */}
                    <Grid item xs={12} sm={6}>
                      {/* SEX SELECT */}
                      <FormControl required className={classes.formControl}
                                   style={{
                                     marginBottom: "40px",
                                     marginTop: "20px"
                                   }}
                      >
                        <InputLabel required htmlFor="sex-native-simple">Sex</InputLabel>
                        <Select
                          native
                          //onChange={this.handleChange('age')}
                          inputProps={{
                            id: 'sex-native-simple',
                          }}
                        >
                          <option value="" />
                          <option value={"M"}>M</option>
                          <option value={"F"}>F</option>
                        </Select>
                      </FormControl>
                      <br />
                      {/* OTHER NAME */}
                      <TextField
                        required
                        id="other-name"
                        label="Other Name"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* OTHER NUMBER */}
                      <TextField
                        required
                        id="other-number"
                        label="Other number"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* ADDRESS */}
                      <TextField
                        required
                        id="address"
                        label="Address"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* NEXT OF KIN CONTACT */}
                      <TextField
                        required
                        id="next-of-kin-contact"
                        label="Next of kin Contact"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />

                      {/* OPTIONAL FIELDS */}
                      <h3 style={{ marginTop: "30px" }} className={classes.titles}>
                        Other optional information</h3>
                      {/* RELATIONSHIP */}
                      <TextField
                        id="relationship"
                        label="Relationship"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />
                      {/* INSURANCE */}
                      <TextField
                        id="insurance"
                        label="Insurance"
                        className={classes.textField}
                        margin="normal"
                      />
                      {/* BLOOD GROUP SELECT */}
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="blood-native-simple">Blood Group</InputLabel>
                        <Select
                          native
                          //onChange={this.handleChange('age')}
                          inputProps={{
                            id: 'blood-native-simple',
                          }}
                        >
                          {bloodGroup.map((val, index) =>
                            <option value={val} key={index}>{val}</option>
                          )}
                        </Select>
                      </FormControl>
                      <br />
                      {/* EDUCATIONAL LEVEL */}
                      <TextField
                        id="educational-level"
                        label="Educational level"
                        className={classes.textField}
                        margin="normal"
                      />
                      <br />

                      {/* DISTANCE FROM THE HOSPITAL BLOCK THREE INPUT */}
                      <h5 style={{ marginTop: "25px" }} className={classes.titles}>
                        Distance of the house from the Hospital
                      </h5>
                      <TextField
                        id="distance-house-hospital-dd"
                        placeholder={"dd"}
                        //onChange={this.handleChange('age')}
                        type="number"
                        className={classes.textFieldThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      <TextField
                        id="distance-house-hospital-hh"
                        placeholder={"hh"}
                        //onChange={this.handleChange('age')}
                        type="number"
                        className={classes.textFieldThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      <TextField
                        id="distance-house-hospital-mm"
                        placeholder={"mm"}
                        //onChange={this.handleChange('age')}
                        type="number"
                        className={classes.textFieldThree}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        margin="normal"
                      />
                      <br />

                      {/*BLOCK THREE ELEMENT TRANSPORT */}
                      <FormControlLabel
                        style={{ marginLeft: "-10px" }}
                        className={classes.textFieldThree}
                        control={
                          <Checkbox
                            checked={this.state.transport1}
                            onChange={this.handleChangeTransport('transport1')}
                            value="Transport1"
                            color="primary"
                          />
                        }
                        label="Transport"
                      />
                      <FormControlLabel
                        className={classes.textFieldThree}
                        control={
                          <Checkbox
                            checked={this.state.transport2}
                            onChange={this.handleChangeTransport('transport2')}
                            //value="Transport2"
                            //label="Transport2"
                            placeholder="Transport2"
                            color="primary"
                          />
                        }
                        label="Transport2"
                      />
                      <FormControlLabel
                        className={classes.textFieldThree}
                        control={
                          <Checkbox
                            checked={this.state.transport3}
                            onChange={this.handleChangeTransport('transport3')}
                            value="Transport3"
                            color="primary"
                          />
                        }
                        label="Transport3"
                      />
                      <br />
                      {/* SAVE AND START VISIT BUTTON */}
                      <Button variant="raised" component="span"
                              className={classes.buttonInlineDuo}
                              style={{
                                marginTop: "15px",
                                backgroundColor: "rgba(239, 156, 102, 1)",
                                color: "#FFFFFF",
                              }}>
                        Save and start a visit >
                      </Button>
                      {/* SAVE THE INFORMATION */}
                      <Button variant="raised" component="span"
                              className={classes.buttonInlineDuo}
                              style={{
                                marginTop: "15px",
                                borderColor: '#rgba(239, 156, 102, 1)',
                                color: "rgba(239, 156, 102, 1)"
                              }}>
                        Save the information ›
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
    )
  }
}

PatientRegistration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PatientRegistration);