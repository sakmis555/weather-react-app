import React from "react";
import AllRoutes from "../components/AllRoutes";

import { useEffect, useState } from "react";
import "../App.css";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";

const WeatherForcast15Days = ({ city, setCity }) => {
  const [forcastData, setForcastData] = useState({});

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
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${process.env.REACT_APP_KEY}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await response.json();
        console.log("Forcast data for 15 days", data);
        // if (data.cod !== 200) {
        //   // console.log(data.message);
        //   throw new Error(data.message);
        // }
        // console.log(data.Search);
        // console.log("forcast");
        // console.log("Forcast Data for 15 days", data);
        setForcastData(data);
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
      </div>
    </div>
  );
};

export default WeatherForcast15Days;
