import React from 'react'
import BarGraph from './BarGraph'
import PieModal from './PieModal'
import { Grid } from '@mui/material'
export default function AllGraphs() {
  return (
    <> 
    <Grid xs={12}>
    <div className='container'>
    <div className='row mt-4 mb-4'>
        <div className='col-md-6 mt-4 mb-4'>   
            <BarGraph/>
            </div>
            <div className='col-md-6 mt-4 mb-4'>   
            <PieModal/>
            </div>
    </div>
    </div>
    </Grid>
    </>
  )
}
