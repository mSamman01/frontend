import "./PastResults.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../Assets/wallpaperflare-cropped.jpg";

export default function PastResults() {
  const navigate = useNavigate();

  const [timeFrame, setTimeFrame] = useState({ start: "", end: "" });
  const [selectedControl, setSelectedControl] = useState("");

  function handleTimeFrameChange(e) {
    setTimeFrame({ ...timeFrame, [e.target.name]: e.target.value });
  }

  function handleControlChange(e) {
    setSelectedControl(e.target.value);
  }

  function handleSearch() {
    console.log("Searching for past results:", timeFrame, selectedControl);
  }

  function backToMainPage() {
    navigate("/main");
  }

  return (
    <div className="past-results-background">
      <img src={background} alt="error" className="past-results-bg" />
      <div className="container-past">
        <div className="header-past">
          <div className="past-text">Check For Past Results</div>
          <div className="underline-past"></div>
        </div>

        <div className="filter-section">
          <label style={{ color: "white" }}>Choose Time Frame:</label>
          <div className="date-inputs">
            <input
              type="date"
              name="start"
              value={timeFrame.start}
              onChange={handleTimeFrameChange}
            />
            <span style={{ color: "white" }}>to</span>
            <input
              type="date"
              name="end"
              value={timeFrame.end}
              onChange={handleTimeFrameChange}
            />
          </div>

          <label style={{ color: "white" }}>Select Control Type:</label>
          <select value={selectedControl} onChange={handleControlChange}>
            <option value="">All Controls</option>
            <option value="2-2-1-2">2-2-1-2 - Restricting Remote Access</option>
            <option value="2-2-1-3">2-2-1-3 - Secure Identity Management</option>
            <option value="2-4-1-3">2-4-1-3 - DDoS Protection</option>
            <option value="2-6-1-1">2-6-1-1/2 - Classified Data Identification</option>
            {/* <option value="2-6-1-2">2-6-1-2 - Data Leakage Prevention</option> */}
            <option value="2-11-1-2"> 2-11-1-2 - User Behavior Monitoring</option>
            {/* <option value="2-12-1-3">2-12-1-3 - Cybersecurity Alerts</option> */}
          </select>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
          <button className="search-btn" onClick={backToMainPage}>
            Back to Main Page
          </button>
        </div>
      </div>
    </div>
  );
}
