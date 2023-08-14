import React from "react";
import img1 from "../Assets/1.jpeg"
import img2 from "../Assets/2.jpeg"
import img3 from "../Assets/4.jpeg"
import img4 from "../Assets/7.jpeg"
import img5 from "../Assets/9.jpeg"
import img6 from "../Assets/10.jpeg"
import img7 from "../Assets/11.jpeg"
import img8 from "../Assets/12.jpeg"
import img9 from "../Assets/13.jpeg"
import img10 from "../Assets/DSC_6436.JPG"
import img11 from "../Assets/DSC_6441.JPG"
import img12 from "../Assets/DSC_6439.JPG"

const Work = () => {
  
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Our services are affordable and we carry out site inspection, measurements and suggest most appropriate method of resolving the issue immediately at site at no cost by our professionals. 
        </p>
    </div>
    <div className="grid-wrapper">
        <div className="big">
            <img src={img1} alt="preview"/>
        </div>
        <div className="tall">
            <img src={img2} alt="preview"/>
        </div>
        <div>
            <img src={img3} alt="preview"/>
        </div>
        <div className="tall">
            <img src={img12} alt="preview"/>
        </div>
        <div className="big">
            <img src={img5} alt="preview"/>
        </div>
        <div>
            <img src={img6} alt="preview"/>
        </div>
        <div>
            <img src={img7} alt="preview"/>
        </div>
        <div className="wide">
            <img src={img8} alt="preview"/>
        </div>
        <div>
            <img src={img9} alt="preview"/>
        </div>
        <div className="wide">
            <img src={img10} alt="preview"/>
        </div>
        <div className="big">
            <img src={img11} alt="preview"/>
        </div>
        <div className="big">
            <img src={img4} alt="preview"/>
        </div> 
    </div>
    </div>
  );
};

export default Work;
