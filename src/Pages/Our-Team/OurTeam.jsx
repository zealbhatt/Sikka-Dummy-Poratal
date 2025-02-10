import React from "react";
import Meet_png from "../../assets/team-banner.png";
import './OurTeam.css'
import Vijaysikka from "../../assets/vijay-sikka-2.png";
import jaspritsandhu from "../../assets/jasprit-sandhu.png";
import Header from "../../components/Navbar/Header/Header";
import { Grid } from "@mui/material";
import { FaLinkedin, FaPlusCircle } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import kelly from'../../assets/kelly.png';
import sally from '../../assets/sally-takemoto.png'
import michael from '../../assets/michael.png'
import prasad from '../../assets/prasad.png'
import Footer from "../../components/Footer/Footer";
import sanjay from '../../assets/sanjay.png';
import andrew from '../../assets/andrew.png';
import brian from '../../assets/brian.png';
import xiwang from '../../assets/xi.png';
import lewis from '../../assets/lewis-goldman.png';
import roger from '../../assets/roge-telegan.png';
import nick from '../../assets/nick.png';
import venesa from '../../assets/venesa.png';
import mark from '../../assets/mark-fernandes.png';
import Lokesh from '../../assets/lokesh-sikaria.png'
import vishal from '../../assets/vishal-sikka.png'
import vivek from '../../assets/vivek.png'



export default function OurTeam() {
  return (<>
      
<Grid xs={12} sm={8}>
  <div className="teamhead">
    <Header/>
  </div>
      <div className="our_team">
        <div className="container">
          <div className="row">
        <div className="col-md-4">
          <h1 style={{textAlign:'start',marginTop:'3rem',fontWeight:'700'}}>Meet our team</h1>
          <p style={{marginTop:'2rem',fontSize:'17px',textAlign:'start',fontWeight:'600',marginBottom:'3rem'}} id="teampara">
            We are a group of passionate individuals committed to creating an
            environment of innovation and collaboration to transform the retail
            healthcare, life insurance and markets industries.
          </p>
          <button id="joinusbtn">Join us!</button>
        </div>
        <div className="col-md-4" style={{paddingTop:'3%'}}>
          <img src={Meet_png} alt="teambanner" id="teambanner"/>
        </div>
        </div>
        <div className="row">
          <h1 style={{textAlign:'start',marginTop:'3rem',fontWeight:'700',fontSize:'3rem'}}>Executive Team</h1>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={Vijaysikka} alt="img here" width={250} id="teamimg"/>
          <h4>Vijay Sikka</h4>
          <p>Founder & CEO</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={jaspritsandhu} alt="img here" width={250} id="teamimg"/>
          <h4>Jasprit Sandhu</h4>
          <p> Chief Financial Officer</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={kelly} alt="img here" width={250} id="teamimg"/>
          <h4>Kelly Slavitt</h4>
          <p>General Counsel & Head of Corporate Development
          </p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={sally} alt="img here" width={250} id="teamimg"/>
          <h4>Sally Takemoto</h4>
          <p>Vice President of Operations and HR</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={michael} alt="img here" width={250} id="teamimg"/>
          <h4>Michael Bingham</h4>
          <p>Vice President, Customer Success
          </p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={prasad} alt="img here" width={250} id="teamimg"/>
          <h4>Prasad Khandat</h4>
          <p>Head of Engineering</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={sanjay} alt="img here" width={250} id="teamimg"/>
          <h4>Sanjay Rajak
          </h4>
          <p>Head of Technology and API
          </p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={andrew} alt="img here" width={250} id="teamimg"/>
          <h4>Andrew Ross</h4>
          <p>Product Management Leader</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={brian} alt="img here" width={250} id="teamimg"/>
          <h4>Brian Wu
          </h4>
          <p>Marketing Leader
          </p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={xiwang} alt="img here" width={250} id="teamimg"/>
          <h4>Xi Wang</h4>
          <p>Data Science Leader</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        </div>
        <div className="buisnessdiv">
        <div className="container">
          <div className="row">
            <h1 style={{color:'#681C9A',marginTop:'3rem',fontWeight:'700',fontSize:'3rem'}}>
            Business Leaders
            </h1>
            </div>
            <div className="row">
          <div className="col text-center">
          <img src={lewis} alt="img here" width={250} id="teamimg"/>
          <h4>Lewis Goldman
          </h4>
          <p>Sikka Insights – Insurance
          </p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={roger} alt="img here" width={250} id="teamimg"/>
          <h4>Roger Telegan</h4>
          <p>Business Leader of Dentistry</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={nick} alt="img here" width={250} id="teamimg"/>
          <h4>Nick Gauthier
          </h4>
          <p>General Manager - Operations, RCM/DSO
          </p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={venesa} alt="img here" width={250} id="teamimg"/>
          <h4>Venesa Lewis</h4>
          <p>Customer Success Manager</p>
          <p><FaLinkedin  color='#4a7bbb' size={25} style={{cursor:'pointer'}}/><FaSquareXTwitter size={25} style={{cursor:'pointer',marginLeft:'12px'}}/></p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <h1 style={{textAlign:'start',marginTop:'3rem',fontWeight:'700',fontSize:'3rem'}}>Board of Directors</h1>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={mark} alt="img here" width={250} id="teamimg"/>
          <h4>Mark Fernandes</h4>
          <p>Managing Director,
          Sierra Ventures</p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={Lokesh} alt="img here" width={250} id="teamimg"/>
          <h4>Lokesh Sikaria</h4>
          <p>Managing Director,
          Moneta Ventures</p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
          <img src={Vijaysikka} alt="img here" width={250} id="teamimg"/>
          <h4>Vijay Sikka</h4>
          <p>Founder & CEO</p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
          <div className="col text-center">
          <img src={vishal} alt="img here" width={250} id="teamimg"/>
          <h4>Jasprit Sandhu</h4>
          <p>Founder & CEO,
          Vianai Systems</p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center">
          <img src={vivek} alt="img here" width={250} id="teamimg"/>
          <h4>Vivek Sivathanu</h4>
          <p>Vice President, Private Equity Team
          OrbiMed Advisors</p>
          <p><FaPlusCircle  size={25} style={{cursor:'pointer'}}/></p>
          </div>
        </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      </Grid>
    </>
  );
}
