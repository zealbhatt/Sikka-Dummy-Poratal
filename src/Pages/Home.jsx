import React from "react";
import Header from "../components/Navbar/Header/Header";
import HomeCards from "./HomeCards";
import WelCome from "./WelCome";
import AllGraphs from "./Graphs/AllGraphs";
import DummyTable from "./Tables/DummyTable";
import Connectus from "./Connect";
import Footer from "../components/Footer/Footer";




export default function Home({basicvalue}) {
  console.log(basicvalue);
  
  return (
  
  <>
  <div className="home" style={{boxShadow:'0px 70px 70px #f6e8fa inset'}}>
    <div className="sticky">
        <Header />
    </div>

    <div>
      <WelCome basicvalue={basicvalue}/>
    </div>

    <div>
        <HomeCards/>
    </div>

    <div>
     <AllGraphs />
    </div>

     <div>
     <DummyTable/>
    </div> 
      <div>
        <Connectus/>
      </div>
      <div>
        <Footer/>
      </div>
      </div>
     </>

  );
}
