import React from "react";
import AllRoutes from "../components/AllRoutes";

import { useEffect, useState } from "react";
import "../App.css";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";

const NextWeekend = ({ city, setCity }) => {
  const [weatherData, setWeatherData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    () => async () => {
      try {
        if (city.length < 3) {
          setError("");
          return;
        }
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/nextweekend?key=${process.env.REACT_APP_KEY}&include=days&iconSet=icons1`
        );
        if (!response.ok) {
          throw new Error(
            "Something went wrong!! Please try again with valid city name"
          );
        }
        console.log(city);
        const data = await response.json();
        if (!data.address) {
          throw new Error("City not Found");
        }
        console.log("Today's data ==> ", data);
        setWeatherData(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [city]
  );
  return (
    <div>
      <NavPage />
      <AllRoutes />
      <div className="App">
        <InputForm city={city} setCity={setCity} />
        {isLoading && <p>Loading...</p>}
        {error && <p>ERROR OCCURRED: {error}</p>}
        {/* {!isLoading && (
          <p>Enter the city name to fetch the data. Error in fetching</p>
        )} */}
        {!isLoading && !error && weatherData.address && (
          <>
            <h2>NextWeekend Data</h2>
            <p>City Name: {weatherData.address}</p>
            <p>Current temperature : {weatherData.days[0].temp} Kelvin</p>
            <p>Minimum temperature : {weatherData.days[0].tempmin} Kelvin</p>
            <p>Maximum temperature : {weatherData.days[0].tempmax} Kelvin</p>
            <p>Humidity : {weatherData.days[0].humidity} %</p>
            <p>Wind speed : {weatherData.days[0].windspeed} meter/sec</p>
            <p>
              Wind direction : {weatherData.days[0].winddir} degrees
              (meteorological)
            </p>
            <p>
              Description of the weather : {weatherData.days[0].description}
            </p>
            <img
              src={require(`../assests/weatherIcons/${weatherData.days[0].icon}.png`)}
              alt={""}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NextWeekend;
