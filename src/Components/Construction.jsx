import React from 'react'
import "./Construction.css"

const Construction = () => {
  return (
    <div className="construction-container">
        <img className="portfolio-background" src="Imgs/aurora.jpg" alt="Northern Lights" />
        <div className="header">
            <img className="logo-header" src="/Imgs/log (1).png" alt="Franklin's logo" />
        </div>
        <ion-icon name="construct-outline" color="light" ></ion-icon>
        <div className="construction-title">Under Construction...</div>
    </div>
  )
}

export default Construction