import "./App.css";
import React, { useState } from "react";
import whoamiImage from "./assets/whoamiImage.jpg";
import singapore from "./assets/singapore.jpg";
import recordPlayer from "./assets/recordPlayer.jpg";
import bbimage from "./assets/bbimage.png";
import wallpapap from "./assets/wallpapap.png";

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
          <li>
            <button onClick={() => handlePageChange("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handlePageChange("contact")}>Contact</button>
          </li>
        </ul>
      </nav>

      <main>
        <br></br>
        {page === "home" && (
          <section id="home">
            <div className="cards">
              <div className="card card1">
                <div className="container">
                  <img src={whoamiImage} alt="T-Bone" />
                </div>
                <div className="details">
                  <h3>whoami?</h3>
                  <p>
                    Greetings, programs! I'm Titus Persons, aka T-Bone. I'm a 3D
                    artist, game dev, musician, and a programmer, I fuse
                    creativity with tech to craft immersive experiences. Explore
                    my world and see where my passion for creative technology
                    takes me.
                  </p>
                </div>
              </div>
              <div className="card card2">
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
              <div className="card card3">
                <div className="container">
                  <img src={singapore} alt="Singapore" />
                </div>
                <div className="details">
                  <h3>Programing</h3>
                  <p>
                    I'm relatively new to programming, but I've got a decent
                    handle on HTML, CSS, and Python.
                  </p>
                </div>
              </div>
              <div className="card card4">
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
              <div className="card card5">
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
        {page === "about" && (
          <section>
            <h2>About Page</h2>
            <p>This is the about page.</p>
          </section>
        )}
        {page === "contact" && (
          <section>
            <h2>Contact Page</h2>
            <p>This is the contact page.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
