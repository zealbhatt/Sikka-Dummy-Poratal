import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import roger_png from '../assets/roge-telegan.png';
export default function Connectus() {
  return (
    <div className='container mt-4' style={{textAlign:'center'}}>
      <h1 className='text-center mt-4 ' style={{fontWeight:'700'}}>Connect with us</h1>
      <p className='text-center mt-4'style={{fontSize:'18',fontWeight:'500'}}>To learn more about Sikka and the dental industry, please contact:</p>
      <img src={roger_png} alt='photograph' height={200}/>
      <h5 className='text-center' style={{color:'#681C9A'}}>Roger Telegen</h5>
      <p style={{fontWeight:'500'}}>Business Leader of Dentistry</p>
      <p style={{fontWeight:'500',marginTop:'0'}}> Email | Direct (408) 404-1977</p>
      <p className='text-center'><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
      <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
      </div>
  )
}
