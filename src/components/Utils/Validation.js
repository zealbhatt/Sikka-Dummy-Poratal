
export const IsValidPhone=(values)=>{
    const pattern = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    const errors={};
    if(!pattern.test(values.phoneno)){
      errors.phoneno="Enter a valid phone no."
    }
    return errors;
  };

  export const IsPassStrong = (values) => {
    const Regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
    const errors = {};
    if (!Regex.test(values.password)) {
      errors.password =
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.";
    } 
   
    return errors;
  };

 export const validemail = (values) => {
      const Regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const errors = {};
      if (!Regex.test(values.email)) {
        errors.email = "Enter correct email format";
      }
      return errors;
    };

  export const IssamePass = (values) => {
    const errors = {};
     console.log(values.password);
     console.log(values.confirmpassword);
    if (values.confirmpassword !== values.password  ) {
      errors.confirmpassword="Password doesn't match";
    }
   

    return errors;
  };