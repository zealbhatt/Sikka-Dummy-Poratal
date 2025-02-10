import React from 'react'

function TotalExpenseModal() {
  return (
    <div className='totalexp text-center'>
      <h1>Total Cost</h1>
      <h6>Your total cost is .......</h6>
      <button id='paybtn'style={{width:"130px",height:"35px", color:"white",fontWeight:"500", backgroundColor:'#681C9A',marginTop:'6px'}}>Generate bill</button>
    </div>
  )
}

export default TotalExpenseModal
