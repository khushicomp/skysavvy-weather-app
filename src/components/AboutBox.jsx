import "./aboutBox.css";

export default function AboutBox({ onClose }) {
  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-box" onClick={(e) => e.stopPropagation()}>
        <h3>About Skysavvy</h3>

        <p>
          Skysavvy is a weather web application built to deliver accurate,
          real-time weather information with a clean and modern interface.
        </p>

        <p>
          This project was designed and developed by me to explore API
          integration, location-based services, and UI design using React.
        </p>

        <p className="about-tech">
          <strong>Tech used:</strong> React, OpenWeather API, CSS
        </p>

        <button className="about-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
