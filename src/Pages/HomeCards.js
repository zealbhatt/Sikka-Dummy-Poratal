import './HomeCards.css'
import AmountDueCard from './Cards/AmountDueCard';
import TotalExpenses from './Cards/TotalExpenses';
import BenifitsCard from './Cards/BenifitsCard';
import AmountPaid from './Cards/AmountPaid';
import { Grid } from '@mui/material';
import { cardData } from '../data/data';


export default function HomeCards() {
    
  return (
    <>  
    <div className='container'>
    <Grid container justifyContent="center" alignItems="flex-start">
    {cardData.map((e) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={e.name}>
        <AmountDueCard dueamount={e.dueamount} name={e.name}/>
      </Grid>
    ))}
    {cardData.map((e) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={e.name}>
        <TotalExpenses totalexpense={e.totalexpense} name={e.name}/>
      </Grid>
    ))}
    {cardData.map((e) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={e.name}>
        <BenifitsCard benefits={e.benefits} name={e.name}/>
      </Grid>
    ))}
    {cardData.map((e) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={e.name}>
        <AmountPaid amountPaid={e.amountPaid} name={e.name}/>
      </Grid>
    ))}
  </Grid>
  </div>
    </>
  )
}
