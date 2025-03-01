import "./AboutUs.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../Assets/wallpaperflare-cropped.jpg";

export default function AboutUs() {
  const navigate = useNavigate();

  function returnToMain() {
    navigate("/main");
  }

  return (
    <div className="main-background">
      <img src={background} alt="Background" className="main-bg" />

      <div className="about-us-container">
      <div className="header-aboutus">
          <div className="aboutus-text">About Our Compliance Tool</div>
          <div className="underline-aboutus"></div>
        </div>
        
        <p className="about-us-text">
          This project will automate a tool that helps in compliance with the
          telework cybersecurity controls issued by Saudi Arabia's NCA.
          Teleworking has created new security challenges regarding the
          management of secure access, prevention of DDoS threats, and much
          more. Performing such compliance checks can be quite time-consuming
          for an organization managing massive-scale remote operations.
        </p>
        <p className="about-us-text">
          The proposed tool leverages AI technologies in performing compliance
          checks and vulnerability assessment in telework systems. It will help
          the organization in finding out the non-compliances and addressing
          them well in time. The proposed tool will have modules on user
          behavior monitoring and risk scoring.
        </p>
        <p className="about-us-text">
          The methodology of the project will include the analysis of telework
          cybersecurity controls that are in place within the NCA, system
          architecture design integrating AI for intelligent decision making,
          and tool effectiveness in risk identification and mitigation. Such
          tools and technologies as machine learning algorithms and secure
          development practices are utilized for the development in order to
          enhance its functionality and reliability.
        </p>
        <p className="about-us-text">
          The expected outcome is an easy, scalable solution that will help
          organizations maintain compliance while reducing manual effort and
          possible errors. By responding to the particular challenges of
          telework, this tool provides a significant contribution to enhancing
          cybersecurity resilience and protecting organizational assets in a
          remote working environment.
        </p>
        <div className="return-main">
          <button className="return-btn" onClick={returnToMain}>
            Return To Main Page
          </button>
        </div>
      </div>
    </div>
  );
}
