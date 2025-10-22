import React from "react";
import { Link } from "react-router-dom";
import "../../theme.css";
import "../../pages/LandingPage.css";
import Navbar from "../..//Modules/NavBar/Navbar";

export default function Header({title, descp, hasBackHome, addContent}) {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <div className="Landing-header-content">
          <h1>{title}</h1>
          <p>{descp}</p>
          {hasBackHome ? 
          <Link className="Landing-button-outline" to="/">Back to Home</Link> : <></>}

          {addContent}
          
        </div>
      </header>
      <Navbar/>
    </div>
  );
}
