import { configureStore } from "@reduxjs/toolkit";
import signupreducer from '../Reducer/Signupslice'
 const store = configureStore
({
    reducer:{ 
        signup: signupreducer,
    }
})

export default store; 