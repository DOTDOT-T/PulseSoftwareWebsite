import React from "react";
import { Link } from "react-router-dom";
import "../../theme.css";
import "../../pages/LandingPage.css";

export default function Navbar()
{
    return (
    <>
      {/* Navigation Buttons */}
      <nav className="Landing-nav">
        <Link className="Landing-nav-button-outline" to="/patchnote">Patch note</Link>
        <Link className="Landing-nav-button-outline" to="/downloads">Downloads</Link>
        <Link className="Landing-nav-button-outline" to="/docs">Documentation</Link>
        <Link className="Landing-nav-button-outline" to="/contact">Contact</Link>
      </nav>
    </>
    )
}