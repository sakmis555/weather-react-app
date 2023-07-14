import React from "react";
import DayAndDate from "./DayAndDate";

const DetailCard = ({ weatherDayData }) => {
  return (
    <div className="card">
      <DayAndDate weatherDayData={weatherDayData} />
      <div className="card-content">
        <div className="card-row">
          <img
            src={require(`../assests/weatherIcons/${weatherDayData.icon}.png`)}
            alt={""}
          />
          <div className="card-row-col">
            <span className="card-text-dark">Temperature</span>
            <h3>{weatherDayData.temp}</h3>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <span className="card-text-dark">FeelsLike</span>
            <h4>{weatherDayData.feelslike} </h4>
          </div>
          <div className="card-row-col">
            <span className="card-text-dark">Humidity</span>
            <h4>{weatherDayData.humidity}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <span className="card-text-dark">Max Temp</span>
            <h4>{weatherDayData.tempmax}</h4>
          </div>
          <div className="card-row-col">
            <span className="card-text-dark">Min Temp</span>
            <h4>{weatherDayData.tempmin}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <span className="card-text-dark">Wind Speed</span>
            <h4>{weatherDayData.windspeed}</h4>
          </div>
          <div className="card-row-col">
            <span className="card-text-dark">Wind Direction</span>
            <h4>{weatherDayData.winddir}</h4>
          </div>
        </div>
      </div>
      <div className="card-description">{weatherDayData.description}</div>
    </div>
  );
};

export default DetailCard;
