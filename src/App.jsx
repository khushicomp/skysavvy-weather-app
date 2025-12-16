import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Weather from "./pages/Weather";


export default function App() {
  const [weather, setWeather] = useState(null);
  return (
    <>
      <Header weather={weather} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/weather" 
          element={<Weather weather={weather} setWeather={setWeather}/>}
        />
      </Routes>
    </>
  );
}
