import "./App.css";
import React, { useState } from "react";
import whoamiImage from "./assets/whoamiImage.jpg";
import recordPlayer from "./assets/recordPlayer.jpg";
import bbimage from "./assets/bbimage.png";
import wallpapap from "./assets/wallpapap.png";
import Programming from "./assets/Programming.png";

function App() {
  const [page, setPage] = useState("home");

  function handlePageChange(newPage: string) {
    setPage(newPage);
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handlePageChange("home")}>Home</button>
          </li>
        </ul>
      </nav>

      <main>
        {page === "home" && (
          <section id="home">
            <div className="cards">
              <div
                className="card card1"
                onClick={() => handlePageChange("whoami?")}
              >
                <div className="container">
                  <img src={whoamiImage} alt="T-Bone" />
                </div>
                <div className="details">
                  <h3>whoami?</h3>
                  <p>
                    Greetings, programs! I'm Titus Persons, aka T-Bone. I'm a 3D
                    artist, game dev, musician, a programmer, and much more!
                  </p>
                </div>
              </div>
              <div
                className="card card2"
                onClick={() => handlePageChange("Music")}
              >
                <div className="container">
                  <img src={recordPlayer} alt="recordPlayer" />
                </div>
                <div className="details">
                  <h3>Music</h3>
                  <p>
                    My music taste is a mix of the retro and the futuristic—from
                    the rock and roll of the 80s to the bio-digital jazz of Daft
                    Punk, I'm into it all.
                  </p>
                </div>
              </div>
              <div
                className="card card3"
                onClick={() => handlePageChange("Programming")}
              >
                <div className="container">
                  <img src={Programming} alt="Programming" />
                </div>
                <div className="details">
                  <h3>Programing</h3>
                  <p>
                    I'm relatively new to programming, but I've got a decent
                    handle on HTML, CSS, and Python.
                  </p>
                </div>
              </div>
              <div
                className="card card4"
                onClick={() => handlePageChange("GameDevelopment")}
              >
                <div className="container">
                  <img src={bbimage} alt="VideoGame" />
                </div>
                <div className="details">
                  <h3>Game Development</h3>
                  <p>
                    I've made a variety of games, from my first game boundless
                    balls, to co-development on aigency.fun
                  </p>
                </div>
              </div>
              <div
                className="card card5"
                onClick={() => handlePageChange("3DArtistry")}
              >
                <div className="container">
                  <img src={wallpapap} alt="Blender" />
                </div>
                <div className="details">
                  <h3>3D Artistry</h3>
                  <p>
                    I create animations, produce VFX, and develop conceptual
                    renders.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {page === "whoami?" && <section id="whoami">hello</section>}
        {page === "Music" && (
          <section>
            <h2>MUSIC</h2>
            <p>This is the music page.</p>
          </section>
        )}
        {page === "Programming" && (
          <section>
            <h2>MUSIC</h2>
            <p>This is the music page.</p>
          </section>
        )}
        {page === "GameDevelopment" && (
          <section>
            <h2>MUSIC</h2>
            <p>This is the music page.</p>
          </section>
        )}
        {page === "3DArtistry" && (
          <section>
            <h2>MUSIC</h2>
            <p>This is the music page.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
