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
  FormControlLabel,
} from '@material-ui/core';
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
  marginRight: {
    marginRight: theme.spacing.unit * 2,
  },
  containerWhite: {
    backgroundColor: 'white',
    boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    marginBottom: '70px',
  },
  titleResult: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: '7%',

  },
  resultTitle: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: '30px',
    width: '30%',
  },
  checkControl: {
    marginRight: theme.spacing.unit,
    marginTop: '-7%',
    marginLeft: '15%',
    width: '60%',
  },
  formControl: {
    marginRight: theme.spacing.unit,
    marginTop: '-7%',
    marginLeft: '15%',
    width: '60%',
  },
  leftAlign: {
    marginLeft: '10%',
  },
  marginTop: {
    marginTop: '10%',
  },
});

class LaboratoryTestRisultato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedNO: true,
      checkedCronic: true,
      result: '',
    };
    this.handleChangeTransport = this.handleChangeTransport.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleChangeTransport = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify='center' alignItems='stretch'>
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path="Home / Patient Database / LaboratoryTest / LaboratoryTestResult" txt="" />
              <Grid container spacing={24} className={classes.containerWhite}>
                <Grid item xs={6} md={2} className={'mobile-view-large'}
                      style={{ backgroundColor: 'rgba(94, 94, 94, 1)' }}>
                  <Sidebar
                    patientID={'32040'} OPD={'8937821'} bloodGroup={'A+'}
                    patientName={this.props.patientName} patientAvatarSrc={null}
                    notes={['Pneumonia and malnutrition', 'Grasses, Gluten']}
                    cronic={this.state.checkedCronic} cronicOnChange={this.handleChange}
                    lastAdmission={'22.01.2016'} reason={'Pneumonia and malnutrition'}
                    treatment={'Pneumond malnutrition'} doctorAvatarSrc={null}
                    doctorName={'Dr. Meredith Greys'} doctorJob={'Pneumologis'} doctorPhone={'3453829043'}
                  />
                </Grid>
                {/* RIGHT SUBCOLOUM */}
                <Grid item xs={12} md={10}>
                  <h4 style={{ color: 'rgb(121, 126, 132)' }}>COMPLETE THE FORM IN ORDER TO INSERT LABORATORY TEST
                    RESULTS</h4>

                  <h6 className={classes.titleResult}> Type 1* </h6>
                  <div className={classes.leftAlign}>
                    <div className={classes.selectResult}>
                      <FormControl className={classes.formControl}>
                        <Select
                          native
                          value={this.state.result}
                          onChange={this.handleChange('result')}
                          inputProps={{
                            name: 'result',
                            id: 'result-native',
                          }}
                        >
                          <option value={1}>Result 1</option>
                          <option value={2}>Result 2</option>
                          <option value={3}>Result 3</option>
                          <option value={4}>Result N</option>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <h6 className={classes.titleResult}>Type 2*</h6>
                  <div className={classes.leftAlign}>
                    <h5 className={classes.resultTitle}>1. Result</h5>
                    <div className={classes.checkControl}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.yes1}
                            onChange={this.handleChangeTransport('yes1')}
                            value="yes1"
                            color="primary"
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.no1}
                            onChange={this.handleChangeTransport('no1')}
                            value="no1"
                            color="primary"
                          />
                        }
                        label="No"
                      />
                    </div>
                    <h5 className={classes.resultTitle}>2. Result </h5>
                    <div className={classes.checkControl}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.yes2}
                            onChange={this.handleChangeTransport('yes2')}
                            value="yes2"
                            color="primary"
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.yes2}
                            onChange={this.handleChangeTransport('no2')}
                            value="no2"
                            color="primary"
                          />
                        }
                        label="No"
                      />
                    </div>
                    <h5 className={classes.resultTitle}>3. Result </h5>
                    <div className={classes.checkControl}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.yes2}
                            onChange={this.handleChangeTransport('yes3')}
                            value="yes3"
                            color="primary"
                          />
                        }
                        label="Yes"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.yes2}
                            onChange={this.handleChangeTransport('no3')}
                            value="no3"
                            color="primary"
                          />
                        }
                        label="No"
                      />
                    </div>
                  </div>
                  <h6 className={classes.titleResult}> Type 3* </h6>
                  <div className={classes.leftAlign}>
                    <h5 className={classes.resultTitle}>Result 1</h5>
                    <div className={classes.formControl}>
                      <FormControl>
                        <Select
                          native
                          value={this.state.result1}
                          onChange={this.handleChange('result1')}
                          inputProps={{
                            name: 'result1',
                            id: 'result1-native',
                          }}
                        >
                          <option value="" />
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                      </FormControl>
                    </div>
                    <h5 className={classes.resultTitle}>Result 2</h5>
                    <div className={classes.formControl}>
                      <FormControl>
                        <Select
                          native
                          value={this.state.result2}
                          onChange={this.handleChange('result2')}
                          inputProps={{
                            name: 'result2',
                            id: 'result2-native',
                          }}
                        >
                          <option value="" />
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                      </FormControl>
                    </div>
                    <h5 className={classes.resultTitle}>Result 3</h5>
                    <div className={classes.formControl}>
                      <FormControl>
                        <Select
                          native
                          value={this.state.result3}
                          onChange={this.handleChange('result3')}
                          inputProps={{
                            name: 'result3',
                            id: 'result3-native',
                          }}
                        >
                          <option value="" />
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                          <option value={10}>10</option>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div className={classes.marginTop}>
                    {/* SAVE AND START VISIT BUTTON */}
                    <Button variant="raised" component="span"
                            className={classes.buttonInlineDuo}
                            style={{
                              marginTop: '15px',
                              backgroundColor: 'rgba(239, 156, 102, 1)',
                              color: '#FFFFFF',
                            }}>
                      Save and start a visit >
                    </Button>
                    {/* SAVE THE INFORMATION */}
                    <Button variant="raised" component="span"
                            className={classes.buttonInlineDuo}
                            style={{
                              marginTop: '15px',
                              borderColor: '#rgba(239, 156, 102, 1)',
                              color: 'rgba(239, 156, 102, 1)',
                            }}>
                      Save the information ›
                    </Button>
                  </div>
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

LaboratoryTestRisultato.defaultProps = {
  patientName: 'Modotoky Tokaiia',
  provenance: 'District, Village',
};
LaboratoryTestRisultato.propTypes = {
  classes: PropTypes.object.isRequired,
  patientName: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
};

export default withStyles(styles)(LaboratoryTestRisultato);
