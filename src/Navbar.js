import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Button } from "@mui/material";
import './Navbar.css'
function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h2>Lavish</h2>
          <FingerprintIcon />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <MenuIcon /> : <ClearIcon />}
      </div>
      <ul className={click ? 'nav-menu-active' : 'nav-menu'} >
          <li className="nav-item">
              <Link to ='/' className="nav-links">
               Home
              </Link>
          </li>
         
          <li className="nav-item">
              <Link to ='/products' className="nav-links">
               Products
              </Link>
          </li>
          <li className="nav-item">
              <Link to ='/services' className="nav-links">
               Services
              </Link>
              
          </li>

          <li className="nav-btn">
           <Button className="nav-btn"  varient = 'outline'> Sign up </Button> 
          </li>
          
    
      </ul>
    </div>
  );
}

export default Navbar;
