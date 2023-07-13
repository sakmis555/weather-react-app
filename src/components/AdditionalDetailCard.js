import React from "react";
import DayAndDate from "./DayAndDate";

const AdditionalDetailCard = ({ weatherDayData }) => {
  return (
    <div>
      <DayAndDate weatherDayData={weatherDayData} />
      <div>
        <p>Sunrise</p>
        <h4>{weatherDayData.sunrise}</h4>
        <p>Sunset</p>
        <h4>{weatherDayData.sunset}</h4>
      </div>
      <div>
        <p>FeelsLike Max</p>
        <h4>{weatherDayData.feelslikemax}</h4>
        <p>FeelsLike Min</p>
        <h4>{weatherDayData.feelslikemin}</h4>
      </div>
      <div>
        <p>Snow</p>
        <h4>{weatherDayData.snow}</h4>
        <p>Snow Depth</p>
        <h4>{weatherDayData.snowdepth}</h4>
      </div>
      <div>
        <p>Visibility</p>
        <h4>{weatherDayData.visibility}</h4>
        <p>Moonphase</p>
        <h4>{weatherDayData.moonphase}</h4>
      </div>
      <div>
        <p>Dew</p>
        <h4>{weatherDayData.dew}</h4>
        <p>UV Index</p>
        <h4>{weatherDayData.uvindex}</h4>
      </div>
      <div>
        <p>Conditions</p>
        <h4>{weatherDayData.conditions}</h4>
        <p>Severe Risk</p>
        <h4>{weatherDayData.severerisk}</h4>
      </div>
    </div>
  );
};

export default AdditionalDetailCard;
