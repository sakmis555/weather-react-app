import React from "react";
import DayAndDate from "./DayAndDate";

const DetailCard = ({ weatherDayData }) => {
  return (
    <div>
      <DayAndDate weatherDayData={weatherDayData} />
      <div>
        <img
          src={require(`../assests/weatherIcons/${weatherDayData.icon}.png`)}
          alt={""}
        />
        <h3>{weatherDayData.temp}</h3>
      </div>
      <div>
        <p>FeelsLike</p>
        <h4>{weatherDayData.feelslike} </h4>
        <p>Humidity</p>
        <h4>{weatherDayData.humidity}</h4>
      </div>
      <div>
        <p>Max Temp</p>
        <h4>{weatherDayData.tempmax}</h4>
        <p>Min Temp</p>
        <h4>{weatherDayData.tempmin}</h4>
      </div>
      <div>
        <p>Wind Speed</p>
        <h4>{weatherDayData.windspeed}</h4>
        <p>Wind Direction</p>
        <h4>{weatherDayData.winddir}</h4>
      </div>
      <div>Description of the weather : {weatherDayData.description}</div>
    </div>
  );
};

export default DetailCard;
