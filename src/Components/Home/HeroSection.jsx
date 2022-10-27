import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const onClickLets = () => {
    const position = document.getElementById("expertise-id").offsetTop;
    window.scrollTo({ top: position });
  };

  return (
    <div className="hero-container" id="hero-id">
      <video src="Imgs/space-video.mp4" autoPlay loop muted />
      <div className="hero-back">
        <div className="stars">
          <div className="star-icon star-1">
            <img className="star" src="Imgs/star-f.png" />
          </div>
          <div className="star-icon star-2">
            <img className="star" src="Imgs/star-f.png" />
          </div>
          <div className="star-icon star-3">
            <img className="star" src="Imgs/star-f.png" />
          </div>
          <div className="star-icon star-4">
            <img className="star" src="Imgs/star-f.png" />
          </div>
          <div className="star-icon star-5">
            <img className="star" src="Imgs/star-e.png" />
          </div>
        </div>
        <h1>Mr. Franklin Martins</h1>
        <p>Your Frontend (soon to be Full Stack) Developer!</p>
      </div>
      <div className="hero-btn">
        <button className="btn-hero" onClick={onClickLets}>
          Let's GO!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
