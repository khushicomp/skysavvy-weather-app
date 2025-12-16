import "./aqi.css";

export default function Aqi({ aqi }) {
  if (aqi === null || aqi === undefined) return null;

  let label = "";
  let color = "";

  if (aqi <= 50) {
    label = "Good";
    color = "good";
  } else if (aqi <= 100) {
    label = "Moderate";
    color = "moderate";
  } else if (aqi <= 150) {
    label = "Unhealthy for Sensitive Groups";
    color = "usg";
  } else if (aqi <= 200) {
    label = "Unhealthy";
    color = "unhealthy";
  } else if (aqi <= 300) {
    label = "Very Unhealthy";
    color = "very-unhealthy";
  } else {
    label = "Hazardous";
    color = "hazardous";
  }

  return (
    <div className={`aqi-card ${color}`}>
      <h3>Air Quality Index</h3>
      <div className="aqi-value">{aqi}</div>
      <p className="aqi-label">{label}</p>
    </div>
  );
}
