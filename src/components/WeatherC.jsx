import "./w.css";

export default function WeatherCard({ weather }) {

  if (!weather) return (
    <p style={{textAlign:"center", color:"#777"}}>Search a city to get weather info.</p>
  );

  return (
    <div className="wc-card">
      <h2>{weather.name}</h2>
      <h1>{Math.round(weather.main.temp)}°C</h1>
      <p>{weather.weather[0].description}</p>

      <div className="wc-details">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
        <p>Pressure: {weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}
