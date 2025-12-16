import StartChip from "./StartChip";
import "./wc.css";
export default function WeatherCard() {
  

  return (
    <section className="services-section">
      
      <p className="services-label"></p>

      <div className="services-content">

        {/* LEFT BIG CARD */}
        <div className="left-card">
          <img src="/public/building.jpg" className="left-image" />

          {/* Dashed Outline */}
          <div className="dashed-outline"></div>

          {/* UV Index */}
          <div className="uv-pill">
            ❄ UV Index <span>↓ 2</span>
          </div>

          {/* Wind */}
          <div className="wind-pill">
            🌬 Wind <br /> 3.4 km/h
          </div>

          {/* Location */}
          <p className="location">📍 NYC, United States</p>
        </div>

        {/* RIGHT TEXT AREA */}
        <div className="right-info">
          
          <div className="info-tabs">
            <span className="active">daily data</span>
            <span>lighting tracker ⚡</span>
            <span>weather warnings ⚠️</span>
            <span>time radar ⭕</span>
          </div>

          <div className="cloud-icon">☁</div>

          <p className="data-label">/daily data</p>

          <h2 className="info-title">
            Stay prepared for upcoming <br />
            weather with <strong>accurate daily <br />weather data.</strong>
          </h2>

          

          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>

        </div>
      </div>
    </section>
  );
}
