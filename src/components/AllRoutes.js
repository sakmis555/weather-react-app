import React from "react";
import { NavLink } from "react-router-dom";

const AllRoutes = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/today">Today</NavLink>
        </li>
        <li>
          <NavLink to="/tomorrow">Tomorrow</NavLink>
        </li>
        <li>
          <NavLink to="/yesterday">Yesterday</NavLink>
        </li>
        <li>
          <NavLink to="/next-weekend">NextWeekend</NavLink>
        </li>
        <li>
          <NavLink to="/last-weekend">LastWeekend</NavLink>
        </li>
        <li>
          <NavLink to="/weather-forcast-15-days">15 Days Forcast</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AllRoutes;
