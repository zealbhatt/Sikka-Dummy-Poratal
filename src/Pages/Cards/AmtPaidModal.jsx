import React from 'react'

 function AmtPaidModal() {
  return (
    <div className='amtpaidmodal text-center'>
      <h1>Total Amount Paid</h1>
      <h6>Total generated reciept is 78962$</h6>
      <button id='paybtn'style={{width:"130px",height:"35px", color:"white",fontWeight:"500", backgroundColor:'#681C9A',marginTop:'6px'}}>Get Reciept</button>
    </div>
  )
}
export default AmtPaidModal