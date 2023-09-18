import { H2 } from "@dnb/eufemia";

interface WeatherStatisticsProps {
  weatherdata: WeatherData | null;
}
type WeatherStatisticsDailyUnits = {
  time: string;
  weathercode: string[];
  temperature_2m_max: string[];
};

type WeatherStatisticsDaily = {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
};

export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: WeatherStatisticsDailyUnits;
  daily: WeatherStatisticsDaily;
};

export const WeatherStatistics = ({ weatherdata }: WeatherStatisticsProps) => {
  return (
    <div className="flex-card-container">
      <div className="flex-item">
        <H2>{weatherdata?.timezone}</H2>
      </div>
      <div className="flex-item">
        <h3>Weather Data</h3>
        <p>Latitude : {weatherdata?.latitude}</p>
        <p>Longitude : {weatherdata?.longitude}</p>
        <p>Elevation : {weatherdata?.elevation}</p>
      </div>
      <div className="flex-item">
        <h3>Daily Units</h3>
        <p>{weatherdata?.daily_units.time}</p>
        <p>{weatherdata?.daily_units.weathercode}</p>
        <p>{weatherdata?.daily_units.temperature_2m_max}</p>
      </div>
      <div className="flex-item">
        <h3>Daily</h3>
        <p>{weatherdata?.daily.time}</p>
        <p>{weatherdata?.daily.weathercode}</p>
        <p>{weatherdata?.daily.temperature_2m_max}</p>
      </div>
    </div>
  );
};
