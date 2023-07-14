import React from "react";
import { NavLink } from "react-router-dom";
import { Search } from "./Icons";

const AllRoutes = () => {
  return (
    <div className="container-routes main">
      <ul className="routes-list">
        <li className="route-item">
          <NavLink className="route-link" to="/yesterday">
            <i className="bi bi-search"></i>
            Yesterday
          </NavLink>
        </li>
        <li className="route-item">
          <NavLink className="route-link" to="/last-weekend">
            <i className="bi bi-search"></i>
            Last Weekend
          </NavLink>
        </li>
        <li className="route-item">
          <NavLink className="route-link" to="/today">
            <i className="bi bi-search"></i>
            Today
          </NavLink>
        </li>
        <li className="route-item">
          <NavLink className="route-link" to="/tomorrow">
            <i className="bi bi-search"></i>
            Tomorrow
          </NavLink>
        </li>

        <li className="route-item">
          <NavLink className="route-link" to="/next-weekend">
            <i className="bi bi-search"></i>
            Next Weekend
          </NavLink>
        </li>

        <li className="route-item">
          <NavLink className="route-link" to="/weather-forcast-15-days">
            <i className="bi bi-search"></i>
            15 Days Forcast
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AllRoutes;
