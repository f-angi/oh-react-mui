import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DashboardSection from '../DashboardSection';

const styles = (theme) => {
};

const LoginSummary = props => (
  <Grid>
    <DashboardSection title="Impatient department">
      <div style={{ marginTop: '-20px', color: 'rgba(0, 0, 0, 0.54)', fontWeight: '500' }}>Summary data</div>
      <br />
      <Grid container spacing={24}>
        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inPatients}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inPatientsToday}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS ADMITTED TODAY</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inPatientsMonth}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS ADMITTED THIS MONTH</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inBor}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>BOR <br />(Bed Occupancy Rate)</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inAvgLos}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>AVERAGE LOS <br />(Length Of Stay)
          </div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '15px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inTotBor}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>TOTAL BOR* <br />(Bed Occupancy Rate)
          </div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.inAvgLos2}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>AVERAGE LOS* <br />(Length Of Stay)
          </div>
        </Grid>
      </Grid>
      <br />
    </DashboardSection>
    <br />
    <DashboardSection title="Outpatient department">
      <div style={{ marginTop: '-20px', color: 'rgba(0, 0, 0, 0.54)', fontWeight: '500' }}>Summary data</div>
      <br />
      <Grid container spacing={24}>
        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outPatients}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outPatientsToday}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS ADMITTED TODAY</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outPatientsMonth}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS ADMITTED THIS MONTH</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outBor}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>BOR <br />(Bed Occupancy Rate)</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outAvgLos}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>AVERAGE LOS <br />(Length Of Stay)
          </div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '15px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outTotBor}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>TOTAL BOR* <br />(Bed Occupancy Rate)
          </div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.outAvgLos2}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>AVERAGE LOS* <br />(Length Of Stay)
          </div>
        </Grid>
      </Grid>
    </DashboardSection>
  </Grid>
);

export default withStyles(styles)(LoginSummary);
