import React from "react";

const AdditionalDetailsCard = ({ weatherData }) => {
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
  return <div></div>;
};

export default AdditionalDetailsCard;
