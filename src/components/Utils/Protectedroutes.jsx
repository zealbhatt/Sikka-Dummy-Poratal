import { Outlet,Navigate } from "react-router";
import { browserStore } from "../..";

const Protectedroutes=()=>{
    const isAuthenticated = browserStore.get("Authenticated")
    console.log(isAuthenticated)
    return isAuthenticated === "true" ? <Outlet/> : <Navigate to ="/"/>
}

export default Protectedroutes;