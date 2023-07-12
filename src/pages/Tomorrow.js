import React from "react";
import AllRoutes from "../components/AllRoutes";

import { useEffect, useState } from "react";
import "../App.css";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";
import DetailsCard from "../components/DetailsCard";

const Tomorrow = ({ city, setCity }) => {
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
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/tomorrow?key=${process.env.REACT_APP_KEY}&include=days&iconSet=icons1`
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
            <DetailsCard weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Tomorrow;