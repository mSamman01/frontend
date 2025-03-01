import "./NewCheck.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../Assets/wallpaperflare-cropped.jpg";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="new-check-background">
      <img src={background} alt="error" className="new-check-bg"></img>

      <h1 style={{color: "white"}}> NEW CHECK FOR Compliance SYSTEM</h1>
      
    </div>
  );
}
