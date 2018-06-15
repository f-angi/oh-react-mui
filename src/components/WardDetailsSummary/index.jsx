import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import DashboardSection from '../DashboardSection';

const styles = (theme) => {
};

const WardDetailsSummary = props => (
  <div>
    <DashboardSection title="Summary" style={{ color: 'secondary' }}>
      <Grid container alignItems="stretch" spacing={24}>
        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.patients}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.patientsToday}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS ADMITTED TODAY</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.patientsMonth}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>PATIENTS ADMITTED THIS MONTH</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.bor}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>BOR <br />(Bed Occupancy Rate)</div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.avgLos}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>AVERAGE LOS <br />(Length Of Stay)
          </div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '40px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.totBor}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>TOTAL BOR* <br />(Bed Occupancy Rate)
          </div>
        </Grid>

        <Grid item xs style={{ background: 'rgba(242, 242, 242, 1)', marginLeft: '5px', textAlign: 'center' }}>
          <div style={{ color: '#666666', fontSize: '48px', fontWeight: '700' }}>{props.avgLos2}</div>
          <div style={{ fontSize: '12px', color: '#666666', fontWeight: '700' }}>AVERAGE LOS* <br />(Length Of Stay)
          </div>
        </Grid>
      </Grid>
      <div style={{ marginTop: '15px', fontSize: '13px' }}>
        * Data related to all wards
      </div>
    </DashboardSection>
  </div>
);

export default withStyles(styles)(WardDetailsSummary);
