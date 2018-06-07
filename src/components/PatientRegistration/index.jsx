import React from 'react';
// import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import Header from '../../components/Header';
import WelcomeBar from '../../components/WelcomeBar';
import ChatFloatingPopup from '../../components/ChatFloatingPopup';
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
} from 'material-ui';
import {InsertPhoto, PhotoCamera} from "@material-ui/icons/es/index";

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
        width: 200,
    },
    menu: {
        width: 200,
    },
});

const bloodGroup = ["", "0+", "0-", "A+", "A-", "B+", "B-", "C+", "C-", "AB+", "AB-"];

const AppFrame = props => (
    <div>
        <Grid container justify="center" alignItems="stretch">
            <Grid item xs={12} lg={10}>
                <Header username={props.username} hospitalName={props.hospitalName}/>
                <Paper elevation={4} className={props.classes.appFramePaper}>
                    <WelcomeBar path={"Home / Patient Registration"} txt={""}/>
                    <Grid container spacing={24}>
                        <Grid item xs={6} md={2}>
                            <h4>PATIENT REGISTRATION</h4>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <h5>All fields with * are mandatory. Patient data will be saved within the archive patients.
                                At the end of the process you will be able to register a visit.</h5>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={6}>

                                    {/* TAKE PHOTO */}
                                    <input
                                        accept="image/*"
                                        className={styles.input}
                                        style={{display: "none"}}
                                        id="raised-button-file"
                                        type="file"
                                    />
                                    <label htmlFor="raised-button-file">
                                        <Button variant="raised" component="span" className={styles.button}>
                                            Take a photo of the patient
                                            <IconButton color="primary" className={styles.button} component="span">
                                                <PhotoCamera/>
                                            </IconButton>
                                        </Button>
                                    </label>
                                    <br/>
                                    {/* FIRST NAME */}
                                    <TextField
                                        required
                                        id="first-name"
                                        label="First Name"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* AGE */}
                                    <TextField
                                        required
                                        id="age-yyyy"
                                        label="Age"
                                        placeholder={"yyyy"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%"}}
                                        //inputStyle ={{width: '30%'}}
                                    />
                                    {/* AGE BLOCK THREE INPUT */}
                                    <TextField
                                        required
                                        id="age-mm"
                                        //label="Number"
                                        placeholder={"mm"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%", marginLeft: "2%", marginRight: "2%"}}
                                    />
                                    <TextField
                                        required
                                        id="age-dd"
                                        //label="Number"
                                        placeholder={"dd"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%"}}
                                    />
                                    <TextField
                                        required
                                        id="birthdate"
                                        label="Birthdate"
                                        placeholder={"yyyy/mm/dd"}
                                        //placeholder={"Days"}
                                        //onChange={this.handleChange('age')}
                                        type="text"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            //shrink: true,
                                        }}
                                        margin="normal"
                                        //style={{width: "50%"}}
                                        fullWidth
                                    />
                                    <br/>
                                    {/* BIRTHDATE */}
                                    <TextField
                                        required
                                        id="tax-number"
                                        label="Tax number"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* CITY */}
                                    <TextField
                                        required
                                        id="city"
                                        label="City"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* CONTACT */}
                                    <TextField
                                        required
                                        id="contact"
                                        label="Contact"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* NEXT OF KIN */}
                                    <TextField
                                        required
                                        id="next-of-kin"
                                        label="Next Of Kin"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                   
                                </Grid>

                                {/* RIGHT SUBCOLOUMN */}
                                <Grid item xs={12} sm={6}>
                                    {/* GALLERY */}
                                    <Button variant="raised" component="span" className={styles.button}>
                                        Go to gallery
                                        <IconButton color="primary" className={styles.button} component="span">
                                            <InsertPhoto/>
                                        </IconButton>
                                    </Button>
                                    <br/>
                                    {/* OTHER NAME */}
                                    <TextField
                                        required
                                        id="other-name"
                                        label="Other Name"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* SEX SELECT */}
                                    <FormControl required className={styles.formControl} style={{width: "50%", marginTop: "17px"}}>
                                        <InputLabel required htmlFor="sex-native-simple">Sex</InputLabel>
                                        <Select
                                            native
                                            //value={""}
                                            //onChange={this.handleChange('age')}
                                            inputProps={{
                                                id: 'sex-native-simple',
                                            }}
                                        >
                                            <option value=""/>
                                            <option value={"M"}>M</option>
                                            <option value={"F"}>F</option>
                                        </Select>
                                    </FormControl>
                                    <br/>
                                    {/* OTHER NUMBER */}
                                    <TextField
                                        required
                                        id="other-number"
                                        label="Other number"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                        style= {{marginTop:"23px"}}
                                    />
                                    <br/>
                                    {/* ADDRESS */}
                                    <TextField
                                        required
                                        id="address"
                                        label="Address"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* NEXT OF KIN CONTACT */}
                                    <TextField
                                        required
                                        id="next-of-kin-contact"
                                        label="Next of kin Contact"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    <h3 style={{marginTop: "32px"}}>
                                     Other optional information</h3>
                                    {/* RELATIONSHIP */}
                                    <TextField
                                        id="relationship"
                                        label="Relationship"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* INSURANCE */}
                                    <TextField
                                        id="insurance"
                                        label="Insurance"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    {/* BLOOD GROUP SELECT */}
                                    <FormControl className={styles.formControl} style={{width: "50%"}}>
                                        <InputLabel htmlFor="blood-native-simple">Blood Group</InputLabel>
                                        {/* TODO: Non si vede la selezione perché shiftata a sinistra?*/}
                                        <Select
                                            native
                                            //value={""}
                                            //onChange={this.handleChange('age')}
                                            inputProps={{
                                                id: 'blood-native-simple',
                                            }}
                                        >
                                            {bloodGroup.map((val, index) =>
                                                <option value={val} key={index}>{`${val}`}</option>
                                            )}
                                        </Select>
                                    </FormControl>
                                    <br/>
                                    {/* EDUCATIONAL LEVEL */}
                                    <TextField
                                        id="educational-level"
                                        label="Educational level"
                                        className={styles.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* DISTANCE FROM THE HOSPITAL BLOCK THREE INPUT */}
                                    <TextField
                                        id="distance-house-hospital-dd"
                                        label="Distance of the house from the Hospital"
                                        //value={"Years"}
                                        placeholder={"dd"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%"}}
                                        //inputStyle ={{width: '30%'}}
                                    />
                                    <TextField
                                        id="distance-house-hospital-hh"
                                        //label="Number"
                                        //value={"Month"}
                                        placeholder={"hh"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%", marginLeft: "2%", marginRight: "2%"}}
                                    />
                                    <TextField
                                        id="distance-house-hospital-mm"
                                        //label="Number"
                                        //value={"Days"}
                                        placeholder={"mm"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        className={styles.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%"}}
                                    />
                                    <br/>
                                    {/* BLOCK THREE ELEMENT TRANSPORT */}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={false}
                                                //onChange={this.handleChange('checkedB')}
                                                value="Transport1"
                                                color="primary"
                                            />
                                        }
                                        label="Transport"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={false}
                                                //onChange={this.handleChange('checkedB')}
                                                value="Transport2"
                                                color="primary"
                                            />
                                        }
                                        label="Transport2"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={false}
                                                //onChange={this.handleChange('checkedB')}
                                                value="Transport3"
                                                color="primary"
                                            />
                                        }
                                        label="Transport3"
                                    />

                                     {/* SAVE AND START VISIT BUTTON */}
                                     <Button variant="raised" component="span" style=
                                    {{marginTop:"15px",
                                    backgroundColor: "rgba(239, 156, 102, 1)",
                                    color: "#FFFFFF"}}>
                                        Save and start a visit >
                                    </Button>
                                    {/* SAVE THE INFORMATION */}
                                    <Button variant="raised" component="span" style=
                                    {{marginTop:"15px",
                                     borderColor: '#rgba(239, 156, 102, 1)',
                                    color: "rgba(239, 156, 102, 1)"}}>
                                        Save the information ›
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
        <ChatFloatingPopup/>
    </div>
);

// AppFrame.defaultProps = {
//   classes: {},
//   title: 'HelpDesk',
//   breadcrumbs: [],
//   children: null,
// };
//
// AppFrame.propTypes = {
//   breadcrumbs: PropTypes.arrayOf(PropTypes.any),
//   children: PropTypes.node,
//   classes: PropTypes.objectOf(PropTypes.any),
//   title: PropTypes.string,
// };

export default withStyles(styles)(AppFrame);
