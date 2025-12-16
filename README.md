🌤️ Skysavvy — Weather & AQI Progressive Web App

Skysavvy is a modern Progressive Web App (PWA) that provides real-time weather updates, hourly and 5-day forecasts, and air quality insights based on the user’s location or searched city.

The project focuses on clarity, clean UI, and practical frontend architecture, built entirely with React and deployed on Netlify.

🚀 Live Demo

👉 Live Website:
https://bucolic-choux-232214.netlify.app

👉 Installable App (PWA):
Open the site in Chrome / Edge and click Install from the address bar.

✨ Features

🌍 Location-based weather detection

🔍 Search weather by city

⏱️ Hourly forecast

📅 5-day weather forecast

🌫️ Air Quality Index (AQI) with numeric value

🎨 Dynamic weather-based backgrounds

⚙️ Clean header interactions (About, Services, playful UI elements)

📱 Progressive Web App (installable)

🔐 Secure API key handling using environment variables

🛠️ Tech Stack

Frontend: React (Vite)

Routing: React Router

Styling: CSS

API: OpenWeather API

Deployment: Netlify

PWA: Web App Manifest + Service Worker

🧠 Project Structure (Simplified)
src/
 ├── components/
 │   ├── Header.jsx
 │   ├── Search.jsx
 │   ├── WeatherC.jsx
 │   ├── ForecastH.jsx
 │   ├── ForecastD.jsx
 │   ├── Aqi.jsx
 │   ├── AboutBox.jsx
 │   └── ServicesBox.jsx
 │
 ├── pages/
 │   ├── Home.jsx
 │   └── Weather.jsx
 │
 ├── api/
 │   └── Weatherapi.js
 │
 ├── utils/
 │   └── aqiCalculator.js
 │
 ├── main.jsx
 └── App.jsx

🔐 Environment Variables

The OpenWeather API key is securely handled using environment variables.

Local setup (.env)
VITE_WEATHER_API_KEY=your_openweather_api_key

Netlify

The same variable is added under:

Project settings → Environment variables


⚠️ API keys are not committed to GitHub.

📦 Progressive Web App (PWA)

Skysavvy supports:

Add to Home Screen

Fullscreen app experience

Offline fallback

App-like behavior on desktop and mobile

📌 Notes

This project is primarily optimized for desktop and tablet experiences.

The API key is visible in the browser network tab (expected for frontend-only apps using public APIs).

The project intentionally avoids unnecessary pages or fake CTAs to maintain honest UX.

🧑‍💻 About the Project

This project was built as a hands-on learning experience to explore:

API integration

State management

Routing

UI/UX decisions

Secure deployment practices

Progressive Web App concepts

📜 License

This project is for educational and portfolio purposes
