export function getWeatherIcon(code) {
  const map = {
    "01d": "wi-day-sunny",
    "01n": "wi-night-clear",

    "02d": "wi-day-cloudy",
    "02n": "wi-night-alt-cloudy",

    "03d": "wi-cloud",
    "03n": "wi-cloud",

    "04d": "wi-cloudy",
    "04n": "wi-cloudy",

    "09d": "wi-showers",
    "09n": "wi-showers",

    "10d": "wi-day-rain",
    "10n": "wi-night-alt-rain",

    "11d": "wi-thunderstorm",
    "11n": "wi-thunderstorm",

    "13d": "wi-snow",
    "13n": "wi-snow",

    "50d": "wi-fog",
    "50n": "wi-fog"
  };

  return map[code] || "wi-na";
}

export function getWeatherStyle(code) {
  if (code.includes("01")) return "sunny glow";
  if (code.includes("02") || code.includes("03")) return "cloudy";
  if (code.includes("04")) return "cloudy";
  if (code.includes("09") || code.includes("10")) return "rainy glow";
  if (code.includes("11")) return "stormy glow";
  if (code.includes("13")) return "snowy glow";
  if (code.includes("50")) return "foggy";
  return "";
}

