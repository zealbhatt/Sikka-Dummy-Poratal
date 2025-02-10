import React from 'react'

function AmtDueModal() {
  return (
    <div className='amtduemodal text-center'>
    <h1>Amount Due</h1>
    <h6>Your Total Pending Amount is </h6>
    <button id='paybtn'style={{width:"130px",height:"35px", color:"white",fontWeight:"500", backgroundColor:'#681C9A',marginTop:'6px'}}>Pay now</button>
    </div>
  )
}

export default AmtDueModal
