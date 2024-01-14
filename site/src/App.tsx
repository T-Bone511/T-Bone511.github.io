import "./App.css";
import logo from "./assets/logo.png";
import WEEK1 from "./assets/WEEK1.png";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  function handlePageChange(newPage: string) {
    setPage(newPage);
  }

  return (
    <div className="page">
      <div className="sideBar">
        <img src={logo} alt="" onClick={() => handlePageChange("home")} />
        T-Bone's
        <div></div>
        52 Weeks of creation
        <div></div>
        <a href="https://www.youtube.com/channel/UCZ538qR2wdO3RZqDvz45XxA">
          My Youtube Channel
        </a>
      </div>

      <div className="box"></div>

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
          </>
        )}

        {page === "Week1" && <div>Week1</div>}
        {page === "Week2" && <div>Week2</div>}
      </div>
    </div>
  );
}

export default App;
