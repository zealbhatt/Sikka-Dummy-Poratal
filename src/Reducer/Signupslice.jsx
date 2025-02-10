import { createSlice } from "@reduxjs/toolkit";
import { browserStore } from "..";

const signupslice = createSlice({
  name: "signup",
  initialState: {
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
    isauthenticated:false,
  },
  reducers: {
    handleSubmit:(state,action)=>{
      browserStore.set('formValues',JSON.stringify(action.payload))
      state.isauthenticated=true
    },
    // handlesecsubmit:(state,action)=>{
    //   browserStore.set('signinval',JSON.stringify(action.payload))
    // }
  },
});                             

export const {handleSubmit,handlesecsubmit} = signupslice.actions;
export default signupslice.reducer;