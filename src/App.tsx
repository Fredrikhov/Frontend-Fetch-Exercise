import "./App.css";
import { useState, useEffect } from "react";
import { ProgressIndicator } from "@dnb/eufemia";
import "@dnb/eufemia/style";
import { WeatherData, WeatherStatistics } from "./components/WeatherStatistics";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const URL =
    "https://api.open-meteo.com/v1/forecast?latitude=59.2181&longitude=10.9298&daily=weathercode,temperature_2m_max&timezone=Europe%2FBerlin";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetch(URL)
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <ProgressIndicator />
      ) : (
        <WeatherStatistics weatherdata={weatherData} />
      )}
    </div>
  );
};
