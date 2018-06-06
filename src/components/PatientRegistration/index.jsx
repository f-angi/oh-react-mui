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
    }
});

const bloodGroup = ["", "0+", "0-", "A+", "A-", "B+", "B-", "C+", "C-", "AB+", "AB-"];

const AppFrame = props => (
    <div>
        <Grid container justify="center" alignItems="stretch">
            <Grid item xs={12} lg={10}>
                <Header username={props.username} hospitalName={props.hospitalName}/>
                <Paper elevation={4} className={props.classes.appFramePaper}>
                    <WelcomeBar path={"Home / Patient Registration"} txt={""} />
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
                                        id="required"
                                        label="First Name"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* AGE */}
                                    <TextField
                                        required
                                        id="number"
                                        label="Age"
                                        //value={"Years"}
                                        placeholder={"yyyy"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        //className={classes.textField}
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
                                        id="number"
                                        //label="Number"
                                        //value={"Month"}
                                        placeholder={"mm"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        //className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%", marginLeft: "2%", marginRight: "2%"}}
                                    />
                                    <TextField
                                        required
                                        id="number"
                                        //label="Number"
                                        //value={"Days"}
                                        placeholder={"dd"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        //className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%"}}
                                    />
                                    <TextField
                                        required
                                        id="text"
                                        label="Birthdate"
                                        placeholder={"yyyy/mm/dd"}
                                        //value={"Days"}
                                        //placeholder={"Days"}
                                        //onChange={this.handleChange('age')}
                                        type="text"
                                        //className={classes.textField}
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
                                        id="required"
                                        label="Tax number"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* CITY */}
                                    <TextField
                                        required
                                        id="required"
                                        label="City"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* CONTACT */}
                                    <TextField
                                        required
                                        id="required"
                                        label="Contact"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* NEXT OF KIN */}
                                    <TextField
                                        required
                                        id="required"
                                        label="Next Of Kin"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* BLOOD GROUP SELECT */}
                                    <FormControl required className={styles.formControl}>
                                        <InputLabel required htmlFor="age-native-simple">Blood Group</InputLabel>
                                        <Select
                                            native
                                            value={""}
                                            //onChange={this.handleChange('age')}
                                            inputProps={{
                                                id: 'age-native-simple',
                                            }}
                                        >
                                            {bloodGroup.map((val, index) =>
                                                <option value={val} key={index}>{val}</option>
                                            )}
                                        </Select>
                                    </FormControl>
                                    <br/>
                                    {/* EDUCATIONAL LEVEL */}
                                    <TextField
                                        id="required"
                                        label="Educational level"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* DISTANCE FROM THE HOSPITAL BLOCK THREE INPUT */}
                                    <TextField
                                        id="number"
                                        label="Distance of the house from the Hospital"
                                        //value={"Years"}
                                        placeholder={"dd"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        //className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%"}}
                                        //inputStyle ={{width: '30%'}}
                                    />
                                    <TextField
                                        id="number"
                                        //label="Number"
                                        //value={"Month"}
                                        placeholder={"hh"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        //className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        margin="normal"
                                        style={{width: "30%", marginLeft: "2%", marginRight: "2%"}}
                                    />
                                    <TextField
                                        id="number"
                                        //label="Number"
                                        //value={"Days"}
                                        placeholder={"mm"}
                                        //onChange={this.handleChange('age')}
                                        type="number"
                                        //className={classes.textField}
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
                                        id="required"
                                        label="Other Name"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* SEX SELECT */}
                                    <FormControl required className={styles.formControl}>
                                        <InputLabel required htmlFor="age-native-simple">Sex</InputLabel>
                                        <Select
                                            native
                                            //value={""}
                                            //onChange={this.handleChange('age')}
                                            inputProps={{
                                                id: 'age-native-simple',
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
                                        id="required"
                                        label="Other number"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* ADDRESS */}
                                    <TextField
                                        required
                                        id="required"
                                        label="Address"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* NEXT OF KIN CONTACT */}
                                    <TextField
                                        required
                                        id="required"
                                        label="Next of kin Contact"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* RELATIONSHIP */}
                                    <TextField
                                        id="required"
                                        label="Relationship"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
                                    <br/>
                                    {/* INSURANCE */}
                                    <TextField
                                        id="required"
                                        label="Insurance"
                                        //defaultValue="First Name"
                                        //className={classes.textField}
                                        margin="normal"
                                        fullWidth
                                    />
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
