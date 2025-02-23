import "./Main.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../Assets/wallpaperflare-cropped.jpg";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="main-background">
      <img src={background} alt="error" className="main-bg"></img>
      <h1 style={{ color: "white" }}>HELLO WORLD ! ! ! ! ! ! ! ! ! </h1>
    </div>
  );
}
