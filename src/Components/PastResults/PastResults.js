import "./PastResults.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../Assets/wallpaperflare-cropped.jpg";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="past-results-background">
      <img src={background} alt="error" className="past-results-bg"></img>

      <h1 style={{color: "white"}}> PAST RESULTS FOR Compliance SYSTEM</h1>
      
    </div>
  );
}
