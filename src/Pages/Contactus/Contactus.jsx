import React from "react";
import Header from "../../components/Navbar/Header/Header";
import Footer from "../../components/Footer/Footer";
import contactbanner from "../../assets/contactus-banner.png";
import { HiDesktopComputer } from "react-icons/hi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import "./Contactus.css";
import { Grid } from "@mui/material";
export default function Contactus() {
  return (
    <>
      <Grid xs={12}>
        <div>
          <Header />
        </div>
        <div className="maincontent">
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                <h1 style={{ fontWeight: "700" }}>We’re here to</h1>
                <h1 style={{ fontWeight: "700" }}> help!</h1>
                <p
                  style={{
                    marginTop: "2rem",
                    fontSize: "17px",
                    textAlign: "start",
                    fontWeight: "600",
                    marginBottom: "3rem",
                  }}
                >
                  We’re here to help and answer any questions you might have. We
                  look forward to hearing from you!
                </p>
                <button id="contactusbtn">call 1-800-94-SIKKA</button>
              </div>
              <div className="col  mt-5">
                <img
                  src={contactbanner}
                  alt="contact banner"
                  width={500}
                  className="contactbanner"
                />
              </div>
            </div>
            <div className="row">
              <h1 style={{ fontWeight: "700" }}>How can we help?</h1>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="card text-center mb-5 mt-5"
                  style={{
                    borderRadius: "16px",
                    height: "220px",
                    width: "400px",
                  }}
                >
                  <h3>Product Inquiry</h3>
                  <p
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "400",
                    }}
                  >
                    Request a demo or quote, or speak with a product specialist
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "45px",
                      fontWeight: "400",
                    }}
                  >
                    <HiDesktopComputer />
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="card text-center mb-5 mt-5"
                  style={{
                    borderRadius: "16px",
                    height: "220px",
                    width: "400px",
                  }}
                >
                  <h3>Technical Support</h3>
                  <p
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "400",
                    }}
                  >
                    Connect with a technical expert for technical support
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "45px",
                      fontWeight: "400",
                    }}
                  >
                    <FaScrewdriverWrench />
                  </p>
                </div>
              </div>
              <div className="col">
                <div
                  className="card text-center mb-5 mt-5"
                  style={{
                    borderRadius: "16px",
                    height: "220px",
                    width: "400px",
                  }}
                >
                  <h3>Billing</h3>
                  <p
                    style={{
                      color: "black",
                      fontSize: "17px",
                      fontWeight: "400",
                    }}
                  >
                    Receive assistance with any billing-⁠related inquiries or
                    issues
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontSize: "45px",
                      fontWeight: "400",
                    }}
                  >
                    <FaFileInvoiceDollar />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form
            style={{
              backgroundColor: " #f1e1f5",
              paddingLeft: "15%",
              paddingTop: "3%",
              paddingBottom: "3%",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-4 mt-2 mb-2">
                  <label
                    style={{
                      color: "#681C9A",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Name
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-4 mt-2 mb-2 ">
                  <label
                    style={{
                      color: "#681C9A",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Contact-No.
                  </label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mt-2 mb-2 ">
                  <label
                    style={{
                      color: "#681C9A",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Email
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-4 mt-2 mb-2 ">
                  <label
                    style={{
                      color: "#681C9A",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Company name
                  </label>
                  <input className="form-control" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mt-2 mb-2 ">
                  <label
                    style={{
                      color: "#681C9A",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    What best describes you?*
                  </label>
                  <input className="form-control" />
                </div>
                <div className="col-md-4 mt-2 mb-2 ">
                  <label
                    style={{
                      color: "#681C9A",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Tell us about your billing-related issue or inquiry
                  </label>
                  <input className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mt-2 mb-2">
                  <button
                    type="submit"
                    className="send mt-3 mb-3"
                    style={{
                      backgroundColor: "#681C9A",
                      border: "none",
                      width: "120px",
                      height: "40px",
                      color: "white",
                      borderRadius: "8px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <Footer />
        </div>
      </Grid>
    </>
  );
}
