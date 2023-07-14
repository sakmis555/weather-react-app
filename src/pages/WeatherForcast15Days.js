import React from "react";
import AllRoutes from "../components/AllRoutes";

import { useEffect, useState } from "react";
import "../App.css";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";
import DetailsCards from "../components/DetailsCards";
import CurrentConditions from "../components/CurrentConditions";
import Footer from "../components/Footer";
import ToggleButton from "../components/ToggleButton";
import MainContentHeader from "../components/MainContentHeader";

const WeatherForcast15Days = ({ city, setCity, unit, setUnit, count }) => {
  const [forcastData, setForcastData] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tempUnit, setTempUnit] = useState(unit);
  console.log("outside tempunit", tempUnit);
  console.log("outside unit", unit);
  console.log(count);
  count++;
  useEffect(
    () => async () => {
      try {
        if (city.length < 3) {
          setError("");
          return;
        }
        setIsLoading(true);
        setError("");
        console.log("INside", unit);
        console.log("INside tempunit", tempUnit);

        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?iconSet=icons2&unitGroup=${unit}&key=${process.env.REACT_APP_KEY}`
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
    [city, unit, tempUnit]
  );
  return (
    <div>
      <NavPage />
      <AllRoutes />
      <div className="App">
        <InputForm city={city} setCity={setCity} />
        {forcastData.address && (
          <div className="main-content-header-toggle">
            <MainContentHeader
              title={"15 Days Forcast for "}
              currentCity={forcastData.address}
            />
            <ToggleButton
              unit={unit}
              setUnit={setUnit}
              setTempUnit={setTempUnit}
            />
          </div>
        )}
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
