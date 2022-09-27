import { useState } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  const[logout,setLogout] = useState(false);
const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLogout(true);
}

if(logout){
    return <Navigate to="/login"/>
}
    return (
      <div className="homepage-app">
       <p>This is a homepage</p>
       <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  export default Home;