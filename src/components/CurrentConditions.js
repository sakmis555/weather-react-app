import React from "react";

const CurrentConditions = ({ forcastDayData }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-row">
          <img
            src={require(`../assests/weatherIcons/${forcastDayData.icon}.png`)}
            alt={""}
          />
          <div className="card-row-col">
            <p>FeelsLike</p>
            <h4>{forcastDayData.temp}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>FeelsLike</p>
            <h4>{forcastDayData.feelslike} </h4>
          </div>
          <div className="card-row-col">
            <p>Humidity</p>
            <h4>{forcastDayData.humidity}</h4>
          </div>
        </div>

        <div className="card-row">
          <div className="card-row-col">
            <p>Sunrise</p>
            <h4>{forcastDayData.sunrise}</h4>
          </div>
          <div className="card-row-col">
            <p>Sunset</p>
            <h4>{forcastDayData.sunset}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>Wind Speed</p>
            <h4>{forcastDayData.windspeed}</h4>
          </div>
          <div className="card-row-col">
            <p>Wind Direction</p>
            <h4>{forcastDayData.winddir}</h4>
          </div>
        </div>
        <div className="card-row">
          <div className="card-row-col">
            <p>Moon Phase</p>
            <h4>{forcastDayData.moonphase}</h4>
          </div>
          <div className="card-row-col">
            <p>Visibility</p>
            <h4>{forcastDayData.visibility}</h4>
          </div>
        </div>
        <h3>{forcastDayData.conditions}</h3>
      </div>
    </div>
  );
};

export default CurrentConditions;
