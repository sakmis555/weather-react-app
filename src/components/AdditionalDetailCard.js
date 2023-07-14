import React from "react";
import DayAndDate from "./DayAndDate";

const AdditionalDetailCard = ({ weatherDayData }) => {
  return (
    <div className="card">
      <DayAndDate weatherDayData={weatherDayData} />
      <div className="card-content">
        <div className="card-row">
          <div className="card-row-col">
            <img
              src={require(`../assests/weatherIcons/partly-cloudy-day-1.png`)}
              alt={""}
            />
            <span>Sunrise</span>
            <h4>{weatherDayData.sunrise}</h4>
          </div>
          <div className="card-row-col">
            <img
              src={require(`../assests/weatherIcons/partly-cloudy-night-1.png`)}
              alt={""}
            />
            <span>Sunset</span>
            <h4>{weatherDayData.sunset}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <span>FeelsLike Max</span>
            <h4>{weatherDayData.feelslikemax}</h4>
          </div>
          <div className="card-row-col">
            <span>FeelsLike Min</span>
            <h4>{weatherDayData.feelslikemin}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>Snow</p>
            <h4>{weatherDayData.snow}</h4>
          </div>
          <div className="card-row-col">
            <p>Snow Depth</p>
            <h4>{weatherDayData.snowdepth}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>Visibility</p>
            <h4>{weatherDayData.visibility}</h4>
          </div>
          <div className="card-row-col">
            <p>Moonphase</p>
            <h4>{weatherDayData.moonphase}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>Dew</p>
            <h4>{weatherDayData.dew}</h4>
          </div>
          <div className="card-row-col">
            <p>UV Index</p>
            <h4>{weatherDayData.uvindex}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>Severe Risk</p>
            <h4>{weatherDayData.severerisk}</h4>
          </div>
          <div className="card-row-col">
            <p>Conditions</p>
            <h4>{weatherDayData.conditions}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetailCard;
