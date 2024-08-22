import "./App.css";
import React, { useState } from "react";
import TLogo from "./assets/TLogo.png";
import MusicPage from "./MusicPage"; // Import the MusicPage component

function App() {
  const [page, setPage] = useState("home");

  function handlePageChange(newPage: string) {
    setPage(newPage);
  }

  return (
    <div className="page1">
      <div id="main">
        {page === "home" && (
          <div className="container">
            <div className="image-center">
              <img
                src={TLogo}
                alt="Center Image"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="rotating-buttons">
              <button
                className="radial-button button1"
                onClick={() => handlePageChange("Editting")}
              >
                Editting
              </button>
              <button
                onClick={() => handlePageChange("Music")}
                className="radial-button button2"
              >
                Music
              </button>
              <button
                onClick={() => handlePageChange("VFX")}
                className="radial-button button3"
              >
                VFX
              </button>
              <button
                onClick={() => handlePageChange("Game Development")}
                className="radial-button button4"
              >
                Game Development
              </button>
              <button
                onClick={() => handlePageChange("Programing")}
                className="radial-button button5"
              >
                Programing
              </button>
              <button
                onClick={() => handlePageChange("Animation")}
                className="radial-button button6"
              >
                3D Animation
              </button>
            </div>
          </div>
        )}
        {page === "Music" && <MusicPage />}{" "}
        {/* Render MusicPage component if page is "Music" */}
      </div>

      <div id="navBar">
        <img
          src={TLogo}
          id="navLogo"
          alt="Nav Logo"
          onClick={() => handlePageChange("home")}
        />
      </div>
    </div>
  );
}

export default App;
