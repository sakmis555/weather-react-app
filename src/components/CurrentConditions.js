import React from "react";

const CurrentConditions = ({ forcastDayData }) => {
  return (
    <div>
      <div>
        <img
          src={require(`../assests/weatherIcons/${forcastDayData.icon}.png`)}
          alt={""}
        />
        <h3>{forcastDayData.temp}</h3>
        <h3>{forcastDayData.conditions}</h3>
      </div>
      <div>
        <p>FeelsLike</p>
        <h4>{forcastDayData.feelslike} </h4>
        <p>Humidity</p>
        <h4>{forcastDayData.humidity}</h4>
      </div>
      <div>
        <p>Sunrise</p>
        <h4>{forcastDayData.sunrise}</h4>
        <p>Sunset</p>
        <h4>{forcastDayData.sunset}</h4>
      </div>
      <div>
        <p>Wind Speed</p>
        <h4>{forcastDayData.windspeed}</h4>
        <p>Wind Direction</p>
        <h4>{forcastDayData.winddir}</h4>
      </div>
      <div>
        <p>Moon Phase</p>
        <h4>{forcastDayData.moonphase}</h4>
        <p>Visibility</p>
        <h4>{forcastDayData.visibility}</h4>
      </div>
    </div>
  );
};

export default CurrentConditions;
