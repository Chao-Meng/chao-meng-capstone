import { useState, useEffect } from "react";
import axios from "axios";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import GrainIcon from "@mui/icons-material/Grain";
import OpacityIcon from "@mui/icons-material/Opacity";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import "./WeatherTable.scss";

const WeatherIcon = ({ main }) => {
  if (main === "Clear") return <WbSunnyIcon />;
  if (main === "Clouds") return <CloudIcon />;
  if (main === "Scattered Clouds") return <CloudQueueIcon />;
  if (main === "Light Rain") return <GrainIcon />;
  if (main === "Rain") return <OpacityIcon />;
  if (main === "Thunderstorm") return <ThunderstormIcon />;
  if (main === "Snow") return <AcUnitIcon />;
  return <AirIcon />;
};
const WeatherTable = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const latitude = "43.651070";
    const longitude = "-79.347015";
    const apiKey = "ac53b20edd91c69103661bc983cc3996";
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(url);
        // Process the response to get the forecast for the next three days
        const forecast = response.data.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 3);
        const result = forecast.map((item) => ({
          day: new Date(item.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long",
          }),
          temperature: `${Math.round(
            item.main.temp_min - 273.15
          )}°C / ${Math.round(item.main.temp_max - 273.15)}°C`,
          icon: item.weather[0].main, // Storing the main weather condition
        }));
        setWeatherData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weatherTable">
      {/* <h2>The weather for the next three days</h2> */}
      <table className="weatherTable__table">
        <tbody>
          {weatherData.map((weather, index) => (
            <tr key={index} className="weatherTable__tr">
              <td className="weatherTable__td">
                <WeatherIcon weather={weather.icon} />
              </td>
              <td className="weatherTable__td">{weather.day}</td>
              <td className="weatherTable__td">{weather.temperature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
