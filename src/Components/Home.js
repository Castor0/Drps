import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Dampness & Rooftop Solutions Limited
          </h1>
          <p className="primary-text">
          We Give You The Best Waterproofing Solution
          
          </p>
          <button className="secondary-button">
            Contact Us<FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          
        </div>
      </div>
    </div>
  );
};

export default Home;
