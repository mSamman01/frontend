import "./NewCheck.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "../Assets/wallpaperflare-cropped.jpg";

export default function NewCheck() {
  const navigate = useNavigate();
  const [selectedControl, setSelectedControl] = useState("");
  const [file, setFile] = useState(null);

  const controls = {
    "Control 2-2-1-2 - Restricting Concurrent Logins":
      "Restricting remote access for the same user from multiple computers at the same time.",
    "Control 2-2-1-3 - Secure Identity and Password Management":
      "Using secure standards to manage identities and passwords used in the telework systems, e.g., length, complexity.",
    "Control 2-4-1-3 - Protecting Against DDoS Attacks":
      "Protecting against Distributed Denial of Service Attack (DDoS) attacks to limit risks arising from these attacks.",
    "Control 2-11-1-2 - Monitoring and Analyzing User Behavior (UBA)":
      "Analyzing the user behavior for any unusual behavior.",
      "Control 2-6-1-1/2 - Classified Data Identification":
      "Protecting and Classifying Sensitive Data"
    // "Control 2-12-1-3 - Addressing Cybersecurity Incidents and Threats":
    //   "Monitoring telework systems events around the clock.",
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!selectedControl || !file) {
      alert("Please select a control and upload a file before analyzing.");
      return;
    }
    console.log("Analyzing file:", file.name, "for control:", selectedControl);
    // Add logic for actual analysis here
  };

  function backToMainPage(){
    navigate("/main")
  }

  return (
    <div className="new-check-background">
      <img src={background} alt="error" className="new-check-bg"></img>

      <div className="container-new-check">
        <div className="header-check">
          <div className="check-text">Select Compliance Control</div>
          <div className="underline-check"></div>
        </div>

        <div className="dropdown-container">
          <select
            className="control-dropdown"
            value={selectedControl}
            onChange={(e) => setSelectedControl(e.target.value)}
          >
            <option value="">-- Select a Control --</option>
            {Object.keys(controls).map((control) => (
              <option key={control} value={control}>
                {control}
              </option>
            ))}
          </select>
        </div>

        {selectedControl && (
          <div className="control-description">
            <p>{controls[selectedControl]}</p>
          </div>
        )}

        <div className="upload-section">
          <h3>Upload Data for Analysis</h3>
          <div className="button-group">
            <label className="upload-label">
              <input
                type="file"
                onChange={handleFileChange}
                className="upload-input"
              />
              Choose File
            </label>
            <button className="new-check-btns" onClick={handleAnalyze}>
              Analyze
            </button>
            <button className="new-check-btns" onClick={backToMainPage}>Back to Main Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}
