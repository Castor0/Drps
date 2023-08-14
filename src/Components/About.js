import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/image1.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          We Help Future Proof Your Buildings
        </h1>
        <p className="primary-text">
        Dampness and Rooftop Solutions Limited is affiliated to AMEHGATE Integrated Services Limited sole importers of Revinca Products. DRSL is your one stop shop for all your waterproofing and Dampproofing solutions. 
        The company is registered and deals on cutting edge products that are environmentally fridndly. 

        </p>
       
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
