import React from 'react'
import { NavLink } from "react-router-dom";
import logo from "../Images/logo.png"

export default function Navbar() {
  return (
    <div>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className="navbar-brand" to="/">
      <img className = "img" src = {logo} alt ="logo"  />
    </NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Bidding">Bidding</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/Dashboard">Dashboard</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/Cardholder">Cardholder</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Registration">Registration</NavLink>
        </li>
        
      </ul>
    
    </div>
  </nav>
  
  </div>
  )
}

