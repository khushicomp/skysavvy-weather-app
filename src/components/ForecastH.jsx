import "./ForecastH.css";
import { getWeatherIcon, getWeatherStyle } from "../utils/iconMap";

export default function ForecastH({ data }) {

  if (!data) {
    return (
      <p className="fh-empty">Search a city to view hourly forecast.</p>
    );
  }

  // Take 8 upcoming hours (3-hour interval)
  const hourly = data.list.slice(0, 8);

  return (
    <div className="fh-container">
      {hourly.map((item, index) => {
        const time = new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit"
        });

        const temp = Math.round(item.main.temp);
        const iconCode = item.weather[0].icon;
        const wiClass = getWeatherIcon(iconCode);

        return (
          <div className="fh-card" key={index}>
            <p className="fh-time">{time}</p>

            <i className={`wi ${wiClass} fh-icon icon-hover ${getWeatherStyle(iconCode)}`}></i>

            <p className="fh-temp">{temp}°C</p>
          </div>
        );
      })}
    </div>
  );
}
