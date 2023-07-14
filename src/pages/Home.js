import React from "react";
import "../App.css";
import AllRoutes from "../components/AllRoutes";
import InputForm from "../components/InputForm";
import NavPage from "../components/NavPage";
import Footer from "../components/Footer";
import HomePageHeader from "../components/HomePageHeader";

const Home = ({ city, setCity }) => {
  return (
    <div className="home">
      <NavPage />
      <HomePageHeader />
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default Home;
