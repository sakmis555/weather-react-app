import React from "react";
import "../App.css";
import AllRoutes from "../components/AllRoutes";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";

const Home = ({ city, setCity }) => {
  return (
    <div>
      <NavPage />
      <AllRoutes />
      <div className="App">
        <InputForm city={city} setCity={setCity} />
      </div>
    </div>
  );
};

export default Home;
// Beige: #c8b7a6

// Perriwinkle: #7d94b5

// Dusty Rose: #c29591

// Maroon Brown: #703f37

// Muted Green: #b6c199
