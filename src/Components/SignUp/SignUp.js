import "./SignUp.css";
import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../Assets/wallpaperflare-cropped.jpg";
import email from "../Assets/email.png";
import password from "../Assets/padlock.png";
import user from "../Assets/user.png";

export default function SignUp() {
  const navigate = useNavigate();

  function signUpBtn(event) {
    event.preventDefault(); // Prevents default form submission behavior
    navigate("/main");
  }

  function backToLogInBtn() {
    navigate("/");
  }

  return (
    <div className="signup-background">
      <img src={background} alt="error" className="bg-img"></img>
      <div className="signup-container">
        <div className="header">
          <div className="SignUpText">Sign Up</div>
          <div className="underline"></div>
        </div>
        <form onSubmit={signUpBtn}>
          <div className="inputs">
            <div className="input-group">
              {/* <label>Username</label> */}
              <img src={user} alt=""></img>
              <input type="text" placeholder="Enter Username" required />
            </div>
            <div className="input-group">
              {/* <label>Email</label> */}
              <img src={email} alt=""></img>
              <input type="email" placeholder="Enter Email" required />
            </div>
            <div className="input-group">
              {/* <label>Password</label> */}
              <img src={password} alt=""></img>
              <input type="password" placeholder="Enter Password" required />
            </div>
            <div className="input-group">
              {/* <label>Confirm Password</label> */}
              <img src={password} alt=""></img>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <div className="submit-container">
              <button type="submit" className="submit-btn">
                Sign Up
              </button>

              <button
                type="submit"
                className="submit-btn"
                onClick={backToLogInBtn}
                style={{ backgroundColor: "#D3D3D3", color: "black" }}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
