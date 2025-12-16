import "./weather.css";
import "./weatherBackground.css";
import { calculateAQI } from "../utils/aqiCalculator";

import Search from "../components/Search";
import WeatherC from "../components/WeatherC";
import ForecastH from "../components/ForecastH";
import ForecastD from "../components/ForecastD";
import Aqi from "../components/Aqi";
import { fetchAQI } from "../api/Weatherapi";

import { useState, useEffect } from "react";
import { fetchWeather, fetchForecast, fetchWeatherByCoords,
  fetchForecastByCoords } from "../api/Weatherapi";

export default function Weather({weather, setWeather}) {
  
  const [forecast, setForecast] = useState(null);
  const [aqi, setAqi] = useState(null);


  async function handleSearch(city) {
    const w = await fetchWeather(city);
    const f = await fetchForecast(city);

    const lat = w.coord.lat;
    const lon = w.coord.lon;

    const a = await fetchAQI(lat, lon);
    const pm25 = a.list[0].components.pm2_5;
    const aqiValue = calculateAQI(pm25);
    setAqi(aqiValue);

    setWeather(w);
    setForecast(f);
    
    
  }

  useEffect(() => {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;

      const w = await fetchWeatherByCoords(latitude, longitude);
      const f = await fetchForecastByCoords(latitude, longitude);
      const a = await fetchAQI(latitude, longitude);

      const pm25 = a.list[0].components.pm2_5;
      const aqiValue = calculateAQI(pm25);

      setWeather(w);
      setForecast(f);
      
      setAqi(aqiValue);

    },
    (error) => {
      console.log("Location access denied");
    }
  );
}, []);


  // ⬅️ NEW: compute background class here
  const bgClass = weather ? getBackgroundClass(weather.weather[0].icon) : "";

  return (
    <div className={`weather-page ${bgClass}`}>
      
      <div className="search-bar">
        <Search onSearch={handleSearch} />
      </div>

      <h1 className="weather-title">Check the weather instantly</h1>
      <p className="weather-subtitle">Search for any city and get live weather updates</p>

      <div className="weather-container">

        <div className="section-block1">
          <h2 className="sec-heading">Hourly Forecast</h2>
          <ForecastH data={forecast} />
        </div>

        <div className="section-block">
          <WeatherC weather={weather} />
        </div>

      </div>
      <div className="weather-container2">
          <div className="section-block2">
            <h2 className="sec-heading">Next 5 Days</h2>
            <ForecastD data={forecast} />
          </div>

          <div className="section-block3">
            <Aqi aqi={aqi} />
          </div>
      </div>
      
    </div>
  );
}

// ⬇️ Background theme mapper
function getBackgroundClass(iconCode) {
  if (!iconCode) return "";

  if (iconCode.includes("01")) return "sunny-bg";
  if (iconCode.includes("02") || iconCode.includes("03")) return "cloudy-bg";
  if (iconCode.includes("04")) return "cloudy-bg";
  if (iconCode.includes("09") || iconCode.includes("10")) return "rainy-bg";
  if (iconCode.includes("11")) return "storm-bg";
  if (iconCode.includes("13")) return "snow-bg";
  if (iconCode.includes("50")) return "fog-bg";

  return "";
}
