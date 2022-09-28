import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems.js";

export function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          <Icons.FaHotel/>
          <span style={{marginLeft:"10%",marginBottom:"1%"}}>Apartment</span>
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-items">
          {navItems.map((item) => {
            if(item.id!==3 && item){
            return (
              <li
                key={item.id}
                className={item.sName}
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );}
            else if (item.id===3){
                return(
                    <Link to={item.path} key={item.id} style={{textDecoration:'none',marginTop:'11%'}}>
                 <span style={{color:'whitesmoke'}}> {item.icon} </span>
                  <span onClick={handleLogout} style={{color:'whitesmoke'}}>{item.title}</span>
                </Link>
                )
            }
          })}
        </ul>
      </div>
    </>
  );
}

