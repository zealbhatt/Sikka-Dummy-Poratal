import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Grid } from '@mui/material';
export default function PieModal() {
  return (
    <div className='container'>
      <Grid xs={12}>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' ,color:'#cd54e2' },
            { id: 1, value: 15, label: 'series B', color:'#ffc107'  },
            { id: 2, value: 20, label: 'series C' ,color:'#681C9A' },
          ],
        },
      ]}
      width={350}
      height={350}
    />

    </Grid>
    </div>
  )
}
