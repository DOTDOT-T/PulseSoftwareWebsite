import React from "react";
import "./../theme.css";
import "./LandingPage.css";
import Header from "../Modules/Header/Header";

export default function LandingPage() {
  return (
    <div className="Landing">
        
        <Header 
            title={"Pulse Software"} 
            descp={"Innovative game engines and creative tools for developers."} 
            hasBackHome={false}
            addContent={          
            <a
                className="Landing-button"
                href="https://github.com/DOTDOT-T/PulseEngineSource"
                target="_blank"
                rel="noopener noreferrer"
            >
                Explore Pulse Engine
            </a>}/>

      <section className="Landing-section">
        <div className="Landing-section-text">
          <h2>Pulse Engine v0.2.0</h2>
          <p>
            Our custom game engine is designed for high performance, modularity,
            and ease of use. Build games faster and create immersive worlds!
          </p>
          <a
            className="Landing-button-outline"
            href="https://github.com/DOTDOT-T/PulseEngineSource"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Documentation
          </a>
        </div>

        <div className="Landing-section-image">
          <img src="tankRendered.png" alt="Pulse Engine Screenshot" />
          <img src="editorView.png" alt="Pulse Engine Screenshot 2" />
        </div>
      </section>

      <footer className="Landing-footer">
        <p>&copy; 2025 Pulse Software. All rights reserved.</p>
      </footer>
    </div>
  );
}
