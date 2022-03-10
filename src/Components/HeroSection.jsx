import React from 'react';
import './HeroSection.css';
import {Button} from "./Button.jsx";

const HeroSection = () => {

    return (
        <div className="hero-container">
            <img className="hero-background" src="/Imgs/aurora.jpg" alt="Northern lights" />
            <div className="header">
                <img className="hero-header" src="/Imgs/log (1).png" alt="Franklin logo" />
            </div>
            <div className="hero-back">
                <h1>Mr. Franklin Martins</h1>
                <p>Your Front-End Developer!</p>
                <div className="hero-btn">
                    <Button className="btn-1" buttonStyle="btn--primary" buttonSize="btn--large" >
                        Let's GO!
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;