import "./App.css";
import { useEffect, useState } from "react";

function Weather() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=11.0168&longitude=76.9558&current=temperature_2m"
      );
      const data = await response.json();
      setTemperature(data.current.temperature_2m);
    }
    
    getWeather();
  }, []);

  return (
    <div className="weather-card">
      <h1>Coimbatore Weather</h1>
      <h2>{temperature}°C</h2>
    </div>
  );
}

export default Weather;