import React from "react";
import AdditionalDetailCard from "./AdditionalDetailCard";

const AdditionalDetailsCards = ({ weatherDaysArray }) => {
  return weatherDaysArray.map((weatherDayData, index) => {
    return <AdditionalDetailCard weatherDayData={weatherDayData} key={index} />;
  });
};

export default AdditionalDetailsCards;
