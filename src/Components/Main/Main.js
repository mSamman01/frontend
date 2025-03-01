import "./Main.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../Assets/wallpaperflare-cropped.jpg";

export default function Main() {
  const navigate = useNavigate();

  function aboutUs() {
    navigate("/aboutus");
  }

  function newCompliance() {
    navigate("/newcheck");
  }

  function pastResults() {
    navigate("/pastresults");
  }

  return (
    <div className="main-background">
      <img src={background} alt="error" className="main-bg"></img>
      <div className="container-main">
        <div className="header-main">
          <div className="compliance-text">Compliance Check System</div>
          <div className="underline-main"></div>
        </div>

        <div className="main-options">
          <div className="compliance-btns">
            <button className="main-btns" onClick={newCompliance}>
              New Compliance Check
            </button>
            <button className="main-btns" onClick={pastResults}>
              See Past Results
            </button>
          </div>

          <div className="about-us-btn">
            <button className="main-btns" onClick={aboutUs}>
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
