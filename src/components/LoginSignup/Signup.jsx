import { useState } from "react";
import { useNavigate } from "react-router";
import "./Style.css";
import {
  IsPassStrong,
  IssamePass,
  IsValidPhone,
  validemail,
} from "../Utils/Validation";
import { useDispatch } from "react-redux";
import { handleSubmit } from "../../Reducer/Signupslice";
export default function Signup() {
  const navigate = useNavigate("");

  const OnLogin = () => {
    navigate("/");
  };

  const dispatch = useDispatch();
  //const values = useSelector((state) => state.signup);
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneno: "",
    password: "",
    confirmpassword: "",
    country: "",
    state: "",
    city: "",
    zipcode: "",
    currentaddress: "",
    permanentaddress: "",
    token:false,
  });
  const validateField = (name, value) => {
    switch (name) {
      case "email":
        setvalidemail(validemail(formValues));
        break;

      case "password":
        setStrongPass(IsPassStrong({ ...formValues, [name]: value }));
        break;

      case "confirmpassword":
        setSamePass(IssamePass({ ...formValues, [name]: value }));
        break;

      case "phoneno":
        setValidPhone(IsValidPhone(formValues));
        break;

      default:
        break;
    }
  };
  const [error, setError] = useState({});
  const [isSubmit, setIssubmit] = useState(false);

  const [isvalidemail, setvalidemail] = useState("");

  const [Samepass, setSamePass] = useState("");
  const [StrongPass, setStrongPass] = useState("");

  const [validPhone, setValidPhone] = useState("");

  const handleFieldChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field
    //dispatch(handleChange({ name, value })); // Dispatch the action with the name and value
    setFormValues({ ...formValues, [name]: value });
    const errorMessage = validateField(name, value);
    setError((formValues) => ({ ...formValues, [name]: errorMessage }));
    console.log(formValues);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    const errors = {
      fname: formValues.fname.trim() === "",
      lname: formValues.lname.trim() === "",
      email: formValues.email === "",
      phoneno: formValues.phoneno === "",
      password: formValues.password === "",
      confirmpassword: formValues.confirmpassword === "",
      country: formValues.country === "",
      state: formValues.state === "",
      city: formValues.city === "",
      zipcode: formValues.zipcode === "",
      currentaddress: formValues.currentaddress === "",
      permanentaddress: formValues.permanentaddress === "",
    };

    const formData = {
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      phoneno: formValues.phoneno,
      password: formValues.password,
      confirmpassword: formValues.confirmpassword,
      country: formValues.country,
      state: formValues.state,
      city: formValues.city,
      zipcode: formValues.zipcode,
      address: formValues.address,
      permanentaddress: formValues.permanentaddress,
    };
    dispatch(handleSubmit(formData));
    setError(errors);
    setIssubmit(true);
    //setauth(true);
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    navigate("/");
    formValues.token=true
  };

  return (
    <>
      <div className="signupform mt-5 mb-5 bg-light">
        <form className="form p-3" onSubmit={handlesubmit}>
          <h1 className="text-center mb-3 mt-3" style={{ color: "#681C9A" }}>
            SIGN-UP
          </h1>

          <div className="row">
            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                FirstName :
              </label>
              <input
                type="text"
                name="fname"
                className={`form-control mt-3 mb-3 ${
                  error.fname ? "inputerror" : ""
                }`}
                placeholder="enter your first-name "
                value={formValues.fname}
                onChange={handleFieldChange}
              />
              {isSubmit && error.fname && (
                <div id="errormsg" className="mb-3">
                  Please enter your First name
                </div>
              )}
            </div>
            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                LastName :
              </label>
              <input
                type="text"
                name="lname"
                className={`form-control mt-3 mb-3 ${
                  error.lname ? "inputerror" : ""
                }`}
                placeholder="enter your last-name  "
                value={formValues.lname}
                onChange={handleFieldChange}
              />
              {isSubmit && error.lname && (
                <div id="errormsg" className="mb-3">
                  Please enter your Last name
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                Email :
              </label>
              <input
                type="email"
                name="email"
                className={`form-control mt-3 mb-3 ${
                  error.email ? "inputerror" : ""
                }`}
                placeholder="enter your email "
                value={formValues.email}
                onChange={handleFieldChange}
              />
              {isSubmit && error.email && (
                <div id="errormsg" className="mb-3">
                  Please enter your Email
                </div>
              )}
              <p id="errormsg">{isvalidemail.email}</p>
            </div>

            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                Phone no. :
              </label>
              <input
                type="tel"
                name="phoneno"
                className={`form-control mt-3 mb-3 ${
                  error.phoneno ? "inputerror" : ""
                }`}
                placeholder="enter your phone no. "
                value={formValues.phoneno}
                onChange={handleFieldChange}
              />
              <p id="errormsg">{validPhone.phoneno}</p>
              {isSubmit && error.phoneno && (
                <div id="errormsg" className="mb-3">
                  Please enter your Phone no.
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                Password :
              </label>
              <input
                type="password"
                name="password"
                className={`form-control mt-3 mb-3 ${
                  error.password ? "inputerror" : ""
                }`}
                placeholder="Password goes here "
                value={formValues.password}
                onChange={handleFieldChange}
              />
              <p id="errormsg">{StrongPass.password}</p>
              {isSubmit && error.password && (
                <div id="errormsg" className="mb-3">
                  Please enter your Password
                </div>
              )}
            </div>

            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                Confirm Password :
              </label>
              <input
                type="password"
                name="confirmpassword"
                className={`form-control mt-3 mb-3" ${
                  error.confirmpassword ? "inputerror" : ""
                }`}
                placeholder="Confirm password here"
                value={formValues.confirmpassword}
                onChange={handleFieldChange}
              />
              <p id="errormsg">{Samepass.confirmpassword}</p>
              {isSubmit && error.confirmpassword && (
                <div id="errormsg" className="mt-3">
                  Please confirm your password
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                Country :
              </label>
              <select
                id="country"
                name="country"
                className={`custom-select form-control mt-3 mb-3 " ${
                  error.country ? "inputerror" : ""
                }`}
                value={formValues.country}
                onChange={handleFieldChange}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="Usa">USA</option>
                <option value="Australia">Australia</option>
                <option value="Canada">Canada</option>
                <option value="Russia">Russia</option>
                <option value="China">China</option>
              </select>
              {isSubmit && error.country && (
                <div id="errormsg">Please select a country</div>
              )}
            </div>

            <div className="col">
              <label
                type="state"
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                State :
              </label>
              <input
                type="text"
                name="state"
                className={`form-control mt-3 mb-3" ${
                  error.state ? "inputerror" : ""
                }`}
                placeholder="Enter your State-Name "
                value={formValues.state}
                onChange={handleFieldChange}
              />
              {isSubmit && error.state && (
                <div className="mt-3" id="errormsg">
                  Please enter your state name
                </div>
              )}
            </div>

            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                City :
              </label>
              <input
                type="text"
                name="city"
                className={`form-control mt-3 mb-3" ${
                  error.city ? "inputerror" : ""
                }`}
                placeholder="Enter your city name "
                value={formValues.city}
                onChange={handleFieldChange}
              />
              {isSubmit && error.city && (
                <div id="errormsg" className="mt-3">
                  Please enter your city name
                </div>
              )}
            </div>

            <div className="col">
              <label
                style={{
                  color: "#681C9A",
                  fontWeight: "600",
                  fontSize: "17px",
                }}
              >
                Zip-Code :
              </label>
              <input
                type="number"
                name="zipcode"
                className={`form-control mt-3 mb-3" ${
                  error.zipcode ? "inputerror" : ""
                }`}
                placeholder="Enter your zip-code "
                value={formValues.zipcode}
                onChange={handleFieldChange}
              />
              {isSubmit && error.zipcode && (
                <div id="errormsg" className="mt-3">
                  Please enter zip-code{" "}
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col mt-3 mb-3">
              <div className="input-group-lg">
                <label
                  style={{
                    color: "#681C9A",
                    fontWeight: "600",
                    fontSize: "17px",
                  }}
                >
                  Current Address :
                </label>
                <input
                  type="text-area"
                  name="currentaddress"
                  className={`form-control mt-3 mb-3" ${
                    error.currentaddress ? "inputerror" : ""
                  }`}
                  value={formValues.currentaddress}
                  onChange={handleFieldChange}
                />
              </div>

              {isSubmit && error.currentaddress && (
                <div id="errormsg" className="mt-3">
                  Please enter your current address
                </div>
              )}
            </div>

            <div className="col mt-3">
              <div className="input-group-lg">
                <label
                  style={{
                    color: "#681C9A",
                    fontWeight: "600",
                    fontSize: "17px",
                  }}
                >
                  Permannent Address :
                </label>
                <input
                  type="text"
                  name="permanentaddress"
                  className={`form-control mt-3 mb-3" ${
                    error.permanentaddress ? "inputerror" : ""
                  }`}
                  value={formValues.permanentaddress}
                  onChange={handleFieldChange}
                />
              </div>

              {isSubmit && error.permanentaddress && (
                <div id="errormsg" className="mt-3">
                  Please enter your permanent address
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="submit mt-3 mb-3"
            style={{ backgroundColor: "#681C9A" }}
          >
            SIGN-UP
          </button>
          <p className="text-center">
            Already Have an account ?
            <a
              onClick={OnLogin}
              style={{
                color: "#681C9A",
                cursor: "pointer",
                fontWeight: "500",
                marginLeft: "4px",
              }}
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
