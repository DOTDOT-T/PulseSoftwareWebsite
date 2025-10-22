import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.js";
import PatchNote from "./pages/PatchNote.js";
import Downloads from "./pages/Downloads.js";
import Docs from "./pages/Docs.js";
import Contact from "./pages/Contact.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patchnote" element={<PatchNote />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
