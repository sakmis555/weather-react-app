import React, { useEffect, useState } from "react";

const ToggleButton = ({ unit, setUnit, setTempUnit }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    setUnit(checked ? "uk" : "us");
    setTempUnit(checked ? "uk" : "us");
    console.log("Unit in toggle", unit);
  };
  useEffect((checked) => {}, [checked, setUnit, unit]);
  return (
    <div id="app-cover">
      <div class="row">
        <div class="toggle-button-cover">
          <div class="button-cover">
            <div class="button r" id="button-4">
              <input
                type="checkbox"
                class="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              <div class="knobs"></div>
              <div class="layer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleButton;
