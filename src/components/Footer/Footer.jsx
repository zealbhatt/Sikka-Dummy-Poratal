import React from 'react'
import sikka from '../../assets/sikka-ai-logo-white.png'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
  <div className='footer'>
    <div className='container'>
   <div className='row'>
    <div className='col-md-4'>
      <div className='row'>
      <p><img src={sikka} alt="white logo" height={36} style={{marginTop:'30px'}}/></p>

        </div>
    
      <div className='row'>
      <h6 className='mt-3 mb-4' style={{color:'#ffc107',fontSize:'28'}}>The Optimizer and Insights Company™ </h6>

        </div>
      
      <div className='row'>
      <p id='footer_p'><IoIosCall size={23} color='white'/>  1-800-94-SIKKA</p>

        </div>
      <div className='row'>
      <p id='footer_p'><IoMdMail size={23} color='white'/> info@sikka.ai</p>

        </div>
      <div className='row'>
      <p id='footer_p'><FaLocationDot size={23} color='white'/> 2870 Zanker Rd, Ste 120  San Jose, CA 95134</p>

        </div>
        
      <div className='row'>
      <p><span id='footer_iconp'><FaLinkedin size={23} style={{cursor:'pointer'}}/></span><span id='footer_iconp'><FaSquareXTwitter size={23} style={{cursor:'pointer',marginLeft:'12px'}}/></span> <span id='footer_iconp'><FaFacebook size={23} style={{cursor:'pointer',marginLeft:'12px'}}/></span>
      </p>
        </div>
        <br/>
    </div>
   
    <div className='col'style={{marginTop:'15px'}}>
      <div className='row'>
      <div className='footercol col'>
        <h4  style={{color:'#ffc107'}}>Industries</h4>
        <span id='footerspan'>Dental</span>
        <br/>
        <span id='footerspan'>Veternity</span>
        <br/>
        <span id='footerspan'>Physician</span>
        <br/>
        <span id='footerspan'>Optometry</span>
        <br/>
        <span id='footerspan'>Chiropractic</span>
      </div>
      <div className='footercol col' >
      <h4 style={{color:'#ffc107'}}>Products</h4>
      <span id='footerspan'>Market Place</span>
        <br/>
      <span id='footerspan'>Optimizer</span>
        <br/>
        <span id='footerspan'>Fee survey</span>
        <br/>
        <span id='footerspan'>Sikka Prime</span>
      
      </div>
      <div className='footercol col' >
      <h4 style={{color:'#ffc107'}}>Insights</h4>
      <span id='footerspan'>Insurence</span>
        <br/>
        <span id='footerspan'>Revenue cycle and Management</span>
        <br/>
        <span id='footerspan'>Investors</span>
        <br/>
        <span id='footerspan'>Economic Indicators</span>
      </div>
      </div>
      <br/>
      <div className='row'>
      <div className='footercol col'>
        <h4 style={{color:'#ffc107'}}>Insurence</h4>
      <span id='footerspan'>About</span>
        <br/>
        <span id='footerspan'>Team</span>
        <br/>
        <span id='footerspan'>Careers</span>
        <br/>
        <span id='footerspan'>Blog</span>
        <br/>
        <span id='footerspan'>Video & webinars</span>
        <br/>
        <span id='footerspan'>Events</span>
      </div>
      <div className='footercol col'>
      <h4 style={{color:'#ffc107'}}>Developers</h4>
        <span id='footerspan'>One API overview</span>
        <br/>
        <span id='footerspan'>One API pricing</span>
        <br/>
        <span id='footerspan'>Request quote</span>
        <br/>
        <span id='footerspan'>API documentation</span>
        <br/>
        <span id='footerspan'>API portal</span>
      </div>
      <div className='footercol col' style={{color:'#ffc107'}}>
      <h4>Support</h4>
      <span id='footerspan'>Contact us </span>
        <br/>
        <span id='footerspan'>API status</span>
      </div>
      </div>
    </div>
    </div>
   </div>
   </div>
  )
}
