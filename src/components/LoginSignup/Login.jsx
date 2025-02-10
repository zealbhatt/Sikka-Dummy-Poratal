import { useState} from "react";
import { useNavigate } from "react-router";
import "./Style.css";
import Swal from "sweetalert2";
import { validemail } from "../Utils/Validation";
import { browserStore } from "../../index";

function Login({setBasicValue}) {
  const navigate = useNavigate();
  const onSignUp = () => {
    navigate("Signup");
  };

  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const[isvalidemail,setvalidemail] = useState('');

  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    switch (name) {
      case "email":
        setvalidemail(validemail(formValues));
        break;
      case "password":
        break;
      default:
        break;
    }
    console.log(formValues);
  };
 
  const storedData=browserStore.get('formValues')

  const userObject = storedData ? JSON.parse(storedData) : null;
console.log(formValues)

  const handleSubmit = (e) => {
    setBasicValue(formValues.name)
    e.preventDefault();
    setError(formValues);
        if(formValues.name===userObject.fname && formValues.email===userObject.email && formValues.password===userObject.password ){

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Logged in Successfully",
            showConfirmButton: false,
            timer: 1500
          });
         
          navigate("Home");
          console.log(initialValues);
          browserStore.set("Authenticated", "true");
          console.log(browserStore.get("Authenticated"))
        }
        
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter correct information!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
   
      const errors={
        name:formValues.name.trim() === "", 
        email:formValues.email === "",
        password:formValues.password ==="",
      }
      setError(errors);
      setIsSubmit(true);
    
      if(Object.values(errors).some((error)=>error)){
        return;
      }
    };
  return (
    <>
   
      <div className=" mb-5 bg-light login">  <div className="loginform">
        <form className="form-group p-3" onSubmit={handleSubmit}>
          <h1 className="text-center pt-2" style={{ color: "#681C9A" }}>
            LOGIN
          </h1>
          <div className="  p-2 ">
            <label
              style={{
                color: "#681C9A",
                fontWeight: "600",
                fontSize: "17px",
                marginBottom: "5px",
              }}
            >
              Name :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${error.name ? "inputerror" : ""}`}
              placeholder="enter your name here "
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          { isSubmit && error.name && <div id="errormsg" className="mb-3">Please enter your Username</div>}
          <div className=" p-2">
            <label
              style={{
                color: "#681C9A",
                fontWeight: "600",
                fontSize: "17px",
                marginBottom: "5px",
              }}
            >
              Email :
            </label>
            <input
              type="Email"
              id="email"
              name="email"
              className={`form-control ${error.email ? "inputerror" : ""}`}
              placeholder="enter your email here "
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          { isSubmit && error.email && <div id="errormsg" className="mb-3">Please enter your Email</div>}
          <p id="errormsg">{isvalidemail.email}</p>
          <div className=" p-2">
            <label
              style={{
                color: "#681C9A",
                fontWeight: "600",
                fontSize: "17px",
                marginBottom: "5px",
              }}
            >
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`form-control ${
                error.password ? "inputerror" : ""
              }`}
              placeholder="enter your password "
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          { isSubmit && error.password && <div id="errormsg" className="mb-3">Please enter your Password</div>}
          <input
            type="checkbox"
            name="checkbox"
            onChange={handleChange}
            style={{
              marginLeft: "10px",
              marginTop: "5px",
              marginBottom: "5px",
            }}
          />{" "}
          <label
            style={{
              color: "#681C9A",
              fontWeight: "600",
              marginLeft: "1px",
              marginTop: "5px",
              marginBottom: "13px",
              fontSize: "17px",
            }}
          >
            Remember me
          </label>
          <p
            className="text-center mt-2 mb-2 forgotpass"
            style={{
              color: "#681C9A",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "600",
              float: "right",
            }}
          >
            Forgot Password ?
          </p>
          <button type="submit" className="submit mt-3 mb-3">
            LOGIN
          </button>
          <p className="text-center mt-3 mb-3">
            Don't have an account
            <span
              onClick={onSignUp}
              style={{
                color: "#681C9A",
                cursor: "pointer",
                fontWeight: "600",
                marginLeft: "3px",
              }}
            >
              Sign-up
            </span>
          </p>
        </form>   </div>
      </div>
     
    </>
  );
}
export default Login;
