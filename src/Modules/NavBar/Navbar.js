import React from "react";
import { Link } from "react-router-dom";
import "../../theme.css";
import "../../pages/LandingPage.css";
import "./Navbar.css";

export default function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Web App", path: "/webapp" },
    { label: "Game Engine Tool", path: "/game-engine-tool" },
    { label: "Unity Tool", path: "/unity-tool" },
    { label: "Game Engine", path: "/game-engine" },
    { label: "Service Provider", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="Landing-nav">
      {navItems.map((item) => (
        <Link key={item.path} className="Landing-nav-button-outline" to={item.path}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
