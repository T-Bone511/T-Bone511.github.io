import "./App.css";
import WEEK1 from "./assets/WEEK1.png";
import React, { useState } from "react";
import TLogo from "./assets/TLogo.png";

function App() {
  const [page, setPage] = useState("home");

  function handlePageChange(newPage: string) {
    setPage(newPage);
  }
  return (
    <div className="page">
      <div className="topNav">
        <img src={TLogo} className="logo"></img>
        <div className="titusPersons">
          Titus <div></div>
          Persons
        </div>
        <div className="socialButtons">
          <a href="https://www.youtube.com/channel/UCZ538qR2wdO3RZqDvz45XxA">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/titus_persons/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/TitusPersons">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      {page === "home" && (
        <div className="hero">
          <div></div>
          <p>52 Weeks of Creation</p>
          <div></div>
        </div>
      )}

      <div className="content">
        {page === "home" && (
          <>
            <img
              className="projectLink"
              src={WEEK1}
              alt="Week1"
              onClick={() => handlePageChange("Week1")}
            />

            <button
              className="projectLink"
              onClick={() => handlePageChange("Week2")}
            ></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
            <button className="projectLink"></button>
          </>
        )}

        {page === "Week1" && <div>Week1</div>}
        {page === "Week2" && <div>Week2</div>}
      </div>
    </div>
  );
}

export default App;
