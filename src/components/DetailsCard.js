import React from "react";

const DetailsCard = ({ weatherData }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = weatherData.days[0].datetime;
  const d = new Date(date);
  const dayAndTime = d.toLocaleDateString("en-US", options);
  console.log(dayAndTime);
  return (
    <div>
      <div>{dayAndTime}</div>
      <div>
        <img
          src={require(`../assests/weatherIcons/${weatherData.days[0].icon}.png`)}
          alt={""}
        />
        <h3>{weatherData.days[0].temp}</h3>
      </div>
      <div>
        <p>FeelsLike</p>
        <h4>{weatherData.days[0].feelslike} </h4>
        <p>Humidity</p>
        <h4>{weatherData.days[0].humidity}</h4>
      </div>
      <div>
        <p>Max Temp</p>
        <h4>{weatherData.days[0].tempmax}</h4>
        <p>Min Temp</p>
        <h4>{weatherData.days[0].tempmin}</h4>
      </div>
      <div>
        <p>Wind Speed</p>
        <h4>{weatherData.days[0].windspeed}</h4>
        <p>Wind Direction</p>
        <h4>{weatherData.days[0].winddir}</h4>
      </div>
      <div>Description of the weather : {weatherData.days[0].description}</div>
    </div>
  );
};

export default DetailsCard;
