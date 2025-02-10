import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Grid } from '@mui/material';


export default function BarGraph() {
  return (
    <Grid xs={12}>
     <BarChart
      series={[
        { data: [51, 6, 49, 30] ,color:'#cd54e2'},
        { data: [15, 25, 30, 50] , color:'#ffc107' },
        { data: [60, 50, 15, 25] ,color:'#681C9A' },
      ]}
      height={300}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    </Grid>
  )
}
