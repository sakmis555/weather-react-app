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
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City Name..."
          value={tempCityName}
          onChange={handleCityName}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default InputForm;
