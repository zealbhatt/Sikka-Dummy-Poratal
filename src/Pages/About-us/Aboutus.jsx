import React from "react";
import "./Aboutus.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Header/Header";
import flywheel from '../../assets/Flywheel.gif'
import { Grid } from "@mui/material";
import selectindustry from '../../assets/homepage-select-industry.png'
export default function Aboutus() {
  return (
    <>
      <Grid xs={12} sm={10}>
        <div style={{ marginBottom: "3rem" }}>
          <Header />
        </div>
        <div className="aboutuscontainer">
          <div className="container">
            <div className="about">
              <div className="row">
                <div className="col">
                  <h1
                    style={{
                      textAlign: "start",
                      marginTop: "3rem",
                      fontWeight: "700",
                    }}
                  >
                    <span
                      style={{
                        textAlign: "start",
                        marginTop: "3rem",
                        fontWeight: "700",
                        color: "#681C9A",
                      }}
                    >
                      Welcome
                    </span>{" "}
                    to sikka.ai!
                  </h1>
                  <p
                    style={{
                      marginTop: "2rem",
                      fontSize: "17px",
                      textAlign: "start",
                      fontWeight: "600",
                      marginBottom: "3rem",
                    }}
                  >
                    We are optimizing the business of retail healthcare, life
                    insurance and markets.
                  </p>
                  <button id="joinusbtn">contact us</button>
                </div>
                <div className="col">
                  <iframe
                    src="https://player.vimeo.com/video/658669354?h=a6fc9487e2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen=""
                    width="100%"
                    height="300"
                    title="Company Overview Video"
                    data-ready="true"
                  ></iframe>
                </div>
              </div>
              <div className="row">
                <div className="col mt-5">
                  <h1 style={{fontWeight:'700',fontSize:'45px'}}>Who we are</h1>
                  <p style={{fontSize:'17px',fontWeight:'500',marginTop:'2rem'}}>
                    Silicon Valley-based Sikka.ai is rethinking the $1 trillion
                    retail healthcare market, which includes dental, veterinary,
                    optometry, chiropractor, oral surgery and orthodontics. Its
                    award-winning AI-API has been deployed to over 40K+
                    practices, and it has launched the world's first DentalLLM
                    to over 1K+ Optimizer™ applications. </p>
                    <p style={{fontSize:'17px',fontWeight:'500',marginTop:'1rem'}}>Sikka.ai’s customers
                    include software companies, manufacturers, DSOs, financial
                    institutions, hedge funds, and life insurance companies.
                    These organizations connect to the Sikka.ai platform to
                    access cutting-edge apps and services that optimize business
                    operations while leveraging opt-in, consent-based data for
                    actionable insights.</p>
                    <p style={{fontSize:'17px',fontWeight:'500',marginTop:'1rem'}}> Sikka.ai is profitable and growing at
                   <span style={{color: "#681C9A",marginBottom:'2rem'}}> over 40% ARR</span> year-over-year for its insights business.
                    </p>
                </div>
                <div className="col mt-5 text-center">
                <img src={flywheel} alt="wheel-placeholder" width="400" className="flywheel"/>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col mt-5"> 
                <div className="aboutcard" style={{justifyItems:'center'}}> 
                <div className="innercircle" style={{marginTop:'-5rem'}}>
                <h3 style={{color: "#681C9A",fontSize:'32px',borderRadius:'50%',height:'90px',width:'90px',textAlign:'center',alignContent:'center',boxShadow:' 0 2px 5px 0 rgb(0 0 0 / 40%',backgroundColor:'white'}}>1</h3>
                </div>
                    <h2 style={{color: "#681C9A",}}>Connectivity</h2>
                    <p style={{fontSize:'17px',fontWeight:'500',color:"black"}}>Healthcare practices can connect to Sikka’s secure platform to gain access to hundreds of partner services to optimize their business.</p>
                </div>
                </div>
                <div className="col mt-5">
                <div className="aboutcard" style={{justifyItems:'center'}}>
                <div className="innercircle" style={{marginTop:'-5rem'}}>
                <h3 style={{color: "#681C9A",fontSize:'32px',borderRadius:'50%',height:'90px',width:'90px',textAlign:'center',alignContent:'center',boxShadow:' 0 2px 5px 0 rgb(0 0 0 / 40%',backgroundColor:'white'}}>2</h3>
                </div>
                    <h2 style={{  color: "#681C9A",}}>Applications</h2>
                    <p style={{fontSize:'17px',fontWeight:'500',color:"black"}}>Use a Sikka application or one of our partner applications to optimize the business of your healthcare practice.</p>
                </div>
                </div>
                <div className="col  mt-5">
                <div className="aboutcard" style={{justifyItems:'center'}}>
                <div className="innercircle" style={{marginTop:'-5rem'}}>
                <h3 style={{color: "#681C9A",fontSize:'32px',borderRadius:'50%',height:'90px',width:'90px',textAlign:'center',alignContent:'center',boxShadow:' 0 2px 5px 0 rgb(0 0 0 / 40%',backgroundColor:'white'}}>3</h3>
               </div>
                    <h2 style={{  color: "#681C9A",}}>Insights & Life Insurance</h2>
                    <p style={{fontSize:'17px',fontWeight:'500',color:"black"}}>In addition to making your business successful, Sikka uses its connectivity to offer insights into 5 different healthcare verticals.</p>
                </div>
                </div>
              </div>
              <div className="row">
                <p style={{color: "black",fontSize:'17px',fontWeight:'500',marginTop:'5rem',marginBottom:'5rem'}}><span style={{fontSize:'19px',fontWeight:'700',marginTop:'2rem'}}>Are you an app developer? </span> Do you share our vision of optimizing the business of healthcare with connectivity, applications and insights. If so, we want to hear from you! Please
                <span style={{color: "#681C9A",fontWeight:'500'}}> learn about Sikka ONE API </span>and connect with our API team.</p>
              </div>


            </div>
          </div>
        </div>
        <div className="industryselectiondiv" style={{backgroundColor:'#f1e1f5'}}>
          <div className="container">
            <div className="row">
                <div className="col  mt-5">
                <h1 style={{fontWeight:'700',fontSize:'2.5rem'}}>Select your industry:</h1>
              <select
                id="country"
                name="country"
                style={{
                  color: "#681C9A",
                  backgroundColor:'#f1e1f5',
                  border:'none',
                  borderBottom:'3px solid #681C9A',
                  marginTop:'1rem',
                  fontSize:'2rem',
                  fontWeight:'700'
                }}
              > 
              <option value="">Select</option> 
                <option value="India">India</option>
                <option value="Usa">USA</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
              </select>
                <p style={{fontSize:'17px',fontWeight:'500',marginTop:'2rem', textAlign:'initial'}}>Sikka.ai is proud to offer solutions for dental, veterinary, physician, chiropractic, and optometry industries.</p>
                </div>
                <div className="col text-center mt-5 mb-5">
                <img src={selectindustry} alt="industryselectionimage" width={500} className="industryselect"/>
                </div>
                </div>
                </div>
                </div>

                <div className="featuredserv">
                  <div className="container">
                    <div className="row">
                      <div className="col mt-5 mb-5">
                        <h1 style={{fontWeight:'700'}}>Our <span style={{color:' #681C9A',}}>Vision</span> </h1>
                        <p style={{fontSize:'17px',fontWeight:'500',marginTop:'2rem', }}>Optimizing the business of healthcare with connectivity, applications and insights.</p>
                      </div>
                      <div className="col mt-5 mb-5 " style={{borderLeft:'2px solid black'}}>
                        <h1 style={{fontWeight:'700'}}>Our <span style={{color:' #681C9A'}}>Mission</span></h1>
                        <p style={{fontSize:'17px',fontWeight:'500',marginTop:'2rem'}}>To be the platform that transforms global retail healthcare.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact">
                  <div className="row text-center"><div className="container">
                    <h1 style={{fontWeight:'700'}}>Contact Us</h1>
                    <button style={{width:'150px',height:'45px',marginRight:'1rem',color:'white',backgroundColor:' #681C9A',border:'none',borderRadius:'6px',marginBottom:'7rem',marginTop:'3rem'}}>Contact us</button>
                    <button style={{width:'150px',height:'45px',color:'#681C9A',backgroundColor:'white',borderRadius:'6px',marginBottom:'7rem',marginTop:'3rem',border:'1px solid purple'}}>search carrears</button>
                    </div>
                  </div>
                </div>
        <div>
          <Footer />
        </div>
      </Grid>
    </>
  );
}
