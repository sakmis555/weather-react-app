import React, { useState } from "react";

const InputForm = ({ city, setCity }) => {
  const [tempCityName, setTempCityName] = useState("");

  function handleCityName(e) {
    setTempCityName(e.target.value);
    console.log(tempCityName);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formData = e.target[0].value;
    setCity(formData);
    setTempCityName("");
    console.log(e.target[0].value);
  }
  return (
    <div className="input-form">
      <h2>
        Please enter city name here <i className="bi bi-caret-down-square"></i>
      </h2>
      <form method="post" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter City Name..."
          value={tempCityName}
          onChange={handleCityName}
        />
        <button type="submit" className="input-button">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
