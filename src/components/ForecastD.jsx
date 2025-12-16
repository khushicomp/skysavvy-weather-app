import "./ForecastD.css";
import { getWeatherIcon, getWeatherStyle } from "../utils/iconMap";

export default function ForecastD({ data }) {

  if (!data) {
    return (
      <p className="fd-empty">Search a city to view daily forecast.</p>
    );
  }

  // Pick 1 entry per day (every 8th item)
  const daily = data.list.filter((item, index) => index % 8 === 0);

  return (
    <div className="fd-container">
      {daily.map((item, index) => {

        const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
          weekday: "long"
        });

        const iconCode = item.weather[0].icon;
        const wiClass = getWeatherIcon(iconCode);

        const temp_min = Math.round(item.main.temp_min);
        const temp_max = Math.round(item.main.temp_max);

        return (
          <div className="fd-row" key={index}>
            <p className="fd-day">{day}</p>

            {/* NEW Weather Icons icon */}
            <i className={`wi ${wiClass} fd-icon icon-hover ${getWeatherStyle(iconCode)}`}></i>

            <p className="fd-desc">{item.weather[0].description}</p>

            <p className="fd-temp">
              {temp_max}° / <span>{temp_min}°C</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
