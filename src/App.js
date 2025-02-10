import { Route, Routes } from "react-router";
import Login from "./components/LoginSignup/Login";
import Signup from "./components/LoginSignup/Signup";
import Home from "./Pages/Home";
import { useState } from "react";
import OurTeam from "./Pages/Our-Team/OurTeam";
import Aboutus from "./Pages/About-us/Aboutus";
import Contactus from "./Pages/Contactus/Contactus";
import Calender from "./Pages/Calender/Calender";
// import Signup2 from './components/LoginSignup/Signup2';
import Protectedroutes from "./components/Utils/Protectedroutes";
function App() {
  const [basicvalue, setBasicValue] = useState("");
  console.log(basicvalue);




  return (
    <>
      <Routes>
        <Route element={<Protectedroutes/>}>
          <Route path="Home" element={<Home basicvalue={basicvalue} />} />
          <Route path="OurTeam" element={<OurTeam />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="Calender" element={<Calender />} />
        </Route>

        <Route path="/" element={<Login setBasicValue={setBasicValue} />} />
        <Route path="Signup" element={<Signup />} />

        {/* <Route path="signup2" element={<Signup2/>}/> */}
      </Routes>
    </>
  );
}

export default App;
