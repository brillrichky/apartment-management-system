import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import UnitApartement from "../unitApartment/UnitApartement";

function Home() {
  const[logout,setLogout] = useState(false);


if(logout){
    return <Navigate to="/login"/>
}
    return (
      // <div className="homepage-app">
      //  <p>This is a homepage</p>
      //  <button onClick={handleLogout}>Logout</button>
      // </div>
      <>
      <Navbar/>
        <UnitApartement/>
      </>
    )
  }
  
  export default Home;