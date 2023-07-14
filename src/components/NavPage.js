import React from "react";
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <nav className="navbar">
      <h1>
        <i class="bi bi-rainbow"></i> ReactWithWeather
      </h1>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink className="nav-route" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavPage;
