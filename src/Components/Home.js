import React from "react";
import BannerImage from "../Assets/image2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Dampness & Rooftop Solutions Limited
          </h1>
          <p className="primary-text">
          We Give You The Best Waterproofing Solution
          
          </p>
          <button className="secondary-button">
            Contact Us now <FiArrowRight />{" 080 6199 2343  "}
          </button>
        </div>
        <div className="home-image-section">
        <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
