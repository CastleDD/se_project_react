import { useContext } from "react";
import { weatherOptions } from "../../utils/constants";
import "./WeatherCard.css";
import CurrentTempUnitContext from "../../contexts/currentTempUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isday &&
      option.condition === weatherData.condition
    );
  });

  const weatherOption = filteredOptions[0];

  console.log(weatherData);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTempUnit]}&deg;{currentTempUnit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"} ${
          weatherOption?.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
