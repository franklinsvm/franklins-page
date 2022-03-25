import React from 'react';
import './HeroSection.css';

const HeroSection = () => {

    const onClickLets = () => {
        const position = document.getElementById("expertise-id").offsetTop;
        window.scrollTo({top: position})
    }

    return (
        <div className="hero-container" id="hero-id">
            {/* <img className="hero-background" src="/Imgs/aurora.jpg" alt="Northern lights" /> */}
            <video src="Imgs/space-video.mp4" autoPlay loop muted />
            <div className="header">
                <img className="logo-header" src="/Imgs/log (1).png" alt="Franklin's logo" />
            </div>
            <div className="hero-back">
                <h1>Mr. Franklin Martins</h1>
                <p>Your Full Stack Developer!</p>
                <div className="hero-btn">
                    <button className="btn-hero" onClick={onClickLets}>Let's GO!</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;