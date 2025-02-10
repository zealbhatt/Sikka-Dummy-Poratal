// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { handlesecsubmit } from "../../Reducer/Signupslice";
// import { useNavigate } from "react-router";

// const Signup2 = () => {
//   const dispatch = useDispatch();
//   //const values = useSelector((state) => state.signup);
//    const navigate=useNavigate()
//   const [signvalues, setSignvalues] = useState({
//     fname: "",
//     lname: "",
//   });
  
// const validfield =(name,value)=>{
//   switch(name){
//     case 'email':
//       v
//   }
// }

// const[error,seterror]=useState()

//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setSignvalues({ ...signvalues, [name]: value });
//     const errormsg = validfield(name,value);
//     seterror((signvalues)=>({...signvalues,[name]:errormsg}))
//     console.log(signvalues)
//   };

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       fname: signvalues.fname,
//       lname: signvalues.lname,
//     };

//       dispatch(handlesecsubmit(formData));
//       navigate('/')

//   };

//   return (
//     <>
//       <div className="signupform mt-5">
//       <h1 className="text-center mb-3 mt-5" style={{ color: "#681C9A" }}>
//             SIGN-UP
//           </h1>
//         <div className="container mt-5">
//           <form onSubmit={handlesubmit}>
//             <div className="row ">
//               <div className="col ">
//                 <label>First name</label>
//                 <input
//                   name="fname"
//                   className="form-control"
//                   onChange={handleFieldChange}
//                 />
//               </div>
//               <div className="col">
//                 <label>last name</label>
//                 <input
//                   name="lname"
//                   className="form-control"
//                   onChange={handleFieldChange}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 {" "}
//                 <span>{signvalues.fname}</span>
//               </div>
//               <div className="col">
//                 {" "}
//                 <span>{signvalues.lname}</span>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <label>Email</label>
//                 <input
//                   name="email"
//                   className="form-control"
//                   onChange={handleFieldChange}
//                 />
//               </div>
//               <div className="col">
//               <label>Phone</label>
//                 <input
//                   name="phone"
//                   className="form-control"
//                   onChange={handleFieldChange}
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="submit mt-3 mb-3"
//               style={{ backgroundColor: "#681C9A" }}
//             >
//               SIGN-UP{" "}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup2;
