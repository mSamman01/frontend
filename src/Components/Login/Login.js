import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import email from "../Assets/email.png";
import password from "../Assets/padlock.png";
import user from "../Assets/user.png";
import background from "../Assets/wallpaperflare-cropped.jpg";

export default function Login() {
  const navigate = useNavigate();

  function loginButton(event) {
    event.preventDefault(); // Prevents default form submission behavior
    navigate("/main");
  }

  function signUpButton() {
    navigate("/signup");
  }

  return (
    <div className="login-background">
      <img src={background} alt="Background" className="BGImg" />

      <div className="container">
        <div className="header">
          <div className="text">Log in</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={loginButton}>
          <div className="inputs">
            <div className="input">
              <img src={user} alt="User Icon" />
              <input type="text" placeholder="Enter Username" required />
            </div>
            <div className="input">
              <img src={email} alt="Email Icon" />
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="input">
              <img src={password} alt="Password Icon" />
              <input type="password" placeholder="Enter Password" required />
            </div>
          </div>
          <div className="submit-container">
            <button
              className="submit"
              onClick={signUpButton}
              style={{ backgroundColor: "#D3D3D3", color: "black" }}
            >
              Sign up
            </button>
            <button className="submit" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
