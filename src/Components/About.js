import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          We Help Future Proof Your Buildings
        </h1>
        <p className="primary-text">
        Dampness and Rooftop Solutions Limited is affiliated to AMEHGATE Integrated Services Limited sole importers of Revinca Products. DRSL is your one stop shop for all your waterproofing and Dampproofing solutions. 
The company is registered and deals on cutting edge products that are environmentally fridndly. 

        </p>
        <p className="primary-text">
        Our services are affordable and we carry out site inspection, measurements and suggest most appropriate method of resolving the issue immediately at site at no cost by our professionals. 
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;