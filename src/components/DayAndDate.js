import React from "react";

const DayAndDate = ({ weatherDayData }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = weatherDayData.datetime;
  const d = new Date(date);
  const dayAndTime = d.toLocaleDateString("en-US", options);
  //   console.log(dayAndTime);
  return <div className="card-dateandtime">{dayAndTime}</div>;
};

export default DayAndDate;
