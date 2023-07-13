import React from "react";
import DetailCard from "./DetailCard";

const DetailsCards = ({ weatherDaysArray }) => {
  return weatherDaysArray.map((weatherDayData, index) => {
    return <DetailCard weatherDayData={weatherDayData} key={index} />;
  });
};

export default DetailsCards;
