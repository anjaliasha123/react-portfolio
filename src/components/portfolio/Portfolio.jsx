import React from "react";
import "./Portfolio.scss";
import Img from "../../img/img.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="intro">
      <div className="left">
        <img src={Img} alt="" />
      </div>
      <div className="right">
        <span className="name">Hi, I am Anjali Asha</span>
        <br />
        <span className="job">I am a developer</span>
      </div>
    </div>
  );
};

export default Portfolio;
