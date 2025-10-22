import React from "react";
import "../theme.css";
import "./LandingPage.css";
import Navbar from "../Modules/NavBar/Navbar";
import Header from "../Modules/Header/Header";

export default function PatchNote() {
  return (
    <div className="Landing">
        <Header title={"Patch note"} descp={"Latest updates and version changes for Pulse Engine."} hasBackHome={true}/>
        <Navbar/>
        <section className="Landing-section">
            <div className="Landing-section-text">
              <h2>Version 0.2.0</h2>
              <p>• New rendering pipeline<br/>• Improved physics module<br/>• Bug fixes and optimizations</p>
            </div>
        </section>
    </div>
  );
}
