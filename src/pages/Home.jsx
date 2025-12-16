import "./home.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastHourly from "../components/ForecastHourly";
import ForecastDaily from "../components/ForecastDaily";

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Precise weather,<br/>precisely for you.</h1>

          <button className="start-btn" onClick={() => navigate("/weather")}>
            Let’s start! <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* BELOW HERO: LANDING PAGE CONTENT */}
      <div className="landing-content">
        <SearchBar />
        <WeatherCard />
        <ForecastHourly />
        <ForecastDaily />
       </div>

    </div>
  );
}
