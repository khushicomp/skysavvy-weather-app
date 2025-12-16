import ServicesBox from "./ServicesBox";

import "./h.css";
import AboutBox from "./AboutBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Header({ weather }) {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showFunMsg, setShowFunMsg] = useState(false);

  return (
    <header className="header overlay">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
      {/* Left Section */}
      <div className="header-left">

        {/* Hamburger Icon */}
        

        {/* Get the App Group */}
        <div className="capsule">
          <p>Live Weather Preview</p>
          <i class="fa-solid fa-cloud"></i>
          
        </div>
      </div>

      {/* Center Section */}
      <div className="header-center">

        <div className="capsule">
          <i className="fa-solid fa-location-dot"></i>

          {weather ? (
            <>
              <p>{weather.name}, {weather.sys.country}</p>
              <p>{Math.round(weather.main.temp)}°C</p>
            </>
          ) : (
            <p>Detecting location…</p>
          )}
        </div>

        <button className="b" onClick={() => navigate("/weather")}>
        <div className="icon-circle">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        </button>

        <div className="icon-circle small">
          <p>°F</p>
        </div>

        <div className="icon-circle" onClick={() => {
    setShowFunMsg(true);
    setTimeout(() => setShowFunMsg(false), 3000);
  }} style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <div className="capsule dark">skysavvy</div>
        <div className="capsule" onClick={() => setShowAbout(true)} style={{ cursor: "pointer" }}>About</div>
        <div className="capsule" onClick={() => setShowServices(true)} style={{ cursor: "pointer" }}>Services</div>
      </div>
      {showAbout && <AboutBox onClose={() => setShowAbout(false)} />}
      {showServices && <ServicesBox onClose={() => setShowServices(false)} />}

      {showFunMsg && ( <div className="gear-popover">
        ⚙️ This gear has no gears behind it 😆
      </div>)}


    </header>
  );
}
