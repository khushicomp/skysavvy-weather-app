import React, { useState } from "react";
import "./s.css";

export default function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);   // send city to parent
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
