import React from "react";
import AllRoutes from "../components/AllRoutes";

import { useEffect, useState } from "react";
import "../App.css";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";
import DetailsCards from "../components/DetailsCards";
import CurrentConditions from "../components/CurrentConditions";
import Footer from "../components/Footer";

const UNIT = "uk";
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
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?iconSet=icons2&unitGroup=${UNIT}&key=${process.env.REACT_APP_KEY}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await response.json();
        console.log("Forcast data for 15 days", data);
        if (!data.address) {
          throw new Error("City not Found");
        }
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
        {!isLoading && !error && forcastData.address && (
          <>
            <h2>Current Conditions</h2>
            <CurrentConditions forcastDayData={forcastData.currentConditions} />
            <h2>
              15 Days Forcase for{" "}
              <span className="main-content-city">{forcastData.address}</span>
            </h2>
            <DetailsCards weatherDaysArray={forcastData.days} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WeatherForcast15Days;
