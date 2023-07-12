import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import PageNotFound from "./pages/PageNotFound";
import WeatherForcast15Days from "./pages/WeatherForcast15Days";
import Tomorrow from "./pages/Tomorrow";
import Yesterday from "./pages/Yesterday";
import NextWeekend from "./pages/NextWeekend";
import LastWeekend from "./pages/LastWeekend";
import About from "./pages/About";

function App() {
  const [city, setCity] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home city={city} setCity={setCity} />} />
        <Route
          path="/about"
          element={<About city={city} setCity={setCity} />}
        />
        <Route
          path="/today"
          element={<Today city={city} setCity={setCity} />}
        />
        <Route
          path="/tomorrow"
          element={<Tomorrow city={city} setCity={setCity} />}
        />
        <Route
          path="/yesterday"
          element={<Yesterday city={city} setCity={setCity} />}
        />
        <Route
          path="/next-weekend"
          element={<NextWeekend city={city} setCity={setCity} />}
        />
        <Route
          path="/last-weekend"
          element={<LastWeekend city={city} setCity={setCity} />}
        />
        <Route
          path="/weather-forcast-15-days"
          element={<WeatherForcast15Days city={city} setCity={setCity} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
