import React from "react";
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <nav>
      ReactWithWeather
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavPage;
