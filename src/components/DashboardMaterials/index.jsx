import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import DashboardSection from '../DashboardSection';
import DashboardMaterial from './DashboardMaterial';
import {AppBar, Button, Grid, Tab, Tabs} from '@material-ui/core';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

const materials = [
    {
        name: 'EROTRICIMINA',
        remaining: 150,
        weeksRefueling: 2,
    },
    {
        name: 'AMOXICILLINA',
        remaining: 1200,
        weeksRefueling: 4,
    },
    {
        name: 'CLARITROMICINA',
        remaining: 200,
        weeksRefueling: 4,
    },
];


const DashboardMaterials = props => (
    <DashboardSection title="Materials are running out">
        <AppBar position="static" color="secondary" elevation={0}>
            <Tabs
                indicatorColor="primary"
                fullWidth
                value={0}
            >
                <Tab label="Running out drugs"/>
                <Tab label="Running out nursing materials"/>
            </Tabs>
        </AppBar>
        {materials.map((material, index) => (<DashboardMaterial key={index} material={material}/>))}
        <Grid container justify="center">
            <Grid item>
                <Button color="primary">See all the materials</Button>
            </Grid>
        </Grid>
        <br/>
    </DashboardSection>
);

export default withStyles(styles)(DashboardMaterials);
