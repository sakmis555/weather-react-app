import React from "react";
import AllRoutes from "../components/AllRoutes";

import { useEffect, useState } from "react";
import "../App.css";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";
import DetailsCards from "../components/DetailsCards";
import AdditionalDetailsCards from "../components/AdditionalDetailsCards";
import Footer from "../components/Footer";
import MainContentHeader from "../components/MainContentHeader";
import ToggleButton from "../components/ToggleButton";

const LastWeekend = ({ city, setCity, unit, setUnit }) => {
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
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/lastweekend?key=${process.env.REACT_APP_KEY}&include=days&iconSet=icons1`
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
        {weatherData.address && (
          <div className="main-content-header-toggle">
            <MainContentHeader
              title={"Today's weather"}
              currentCity={weatherData.address}
            />
            <ToggleButton unit={unit} setUnit={setUnit} />
          </div>
        )}
        {isLoading && <p>Loading...</p>}
        {error && <p>ERROR OCCURRED: {error}</p>}
        {!isLoading && !error && weatherData.address && (
          <>
            <DetailsCards weatherDaysArray={weatherData.days} />
            <h2>Additional Details</h2>
            <AdditionalDetailsCards weatherDaysArray={weatherData.days} />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LastWeekend;
