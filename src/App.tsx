import './App.css';
import logo from "./assets/logo.png"
import WEEK1 from "./assets/WEEK1.png"

function App() {
  return (
    <div className="page">

      <div className="sideBar">
        <img src={logo} alt="" />
        T-Bone's
        <div></div>
        52 Weeks of creation
      </div>

      <div className="box">

      </div>

      <div className="content">

        <img src={WEEK1} alt="Week1" />​​
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
      </div>


    </div>
  );
}

export default App;
