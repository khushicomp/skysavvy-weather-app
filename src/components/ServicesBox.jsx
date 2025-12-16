import "./servicesBox.css";

export default function ServicesBox({ onClose }) {
  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-box" onClick={(e) => e.stopPropagation()}>
        <h3>What Skysavvy Offers</h3>

        <p>
          Skysavvy provides real-time weather information designed to help users
          make better daily decisions.
        </p>

        <ul className="services-list">
          <li>🌤️ Live weather conditions</li>
          <li>⏱️ Hourly forecast</li>
          <li>📅 5-day weather outlook</li>
          <li>🌬️ Wind, humidity & pressure</li>
          <li>🌫️ Air Quality Index (AQI)</li>
          <li>📍 Location-based detection</li>
        </ul>

        <p className="about-tech">
          Powered by live weather APIs.
        </p>

        <button className="about-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
