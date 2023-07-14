import React from "react";

const MainContentHeader = ({ title, currentCity }) => {
  return (
    <h2 className="main-content-header">
      {title} for <span className="main-content-city">{currentCity}</span>
    </h2>
  );
};

export default MainContentHeader;
