import React from 'react'
import "./PortfolioPage.css"
import PortfolioItem from './PortfolioItem'

const PortfolioPage = () => {

  return (
    <div className="portfolio-container">
        <img className="portfolio-background" src="Imgs/aurora.jpg" alt="Northern Lights" />
        <div className="portfolio-wrapper">
            <ul className="portfolio-items portfolio-top" >
                <PortfolioItem src="logo512.png" text="Spreadsheet" />
                <PortfolioItem src="Imgs/google-clone.png" text="Google Clone" url="https://f-google-clone.herokuapp.com/search" />
            </ul>
            <ul className="portfolio-items portfolio-middle" >
                {/* <PortfolioItem src="logo512.png" text="Travel Planner" /> */}
                <div className="portfolio-center">
                    <img src="logo512.png" className="portfolio-img" alt="/" />
                    <span>My Projects!</span>
                </div>
                {/* <PortfolioItem src="logo512.png" text="Weather Forecast" /> */}
            </ul>
            <ul className="portfolio-items portfolio-bottom" >
                <PortfolioItem src="Imgs/calculator.png" text="Calculator" url="https://f-calculator.herokuapp.com/" />
                <PortfolioItem src="Imgs/github.png" text="GitHub" url="https://github.com/franklinsvm" />
            </ul>
        </div>
    </div>
  )
}

export default PortfolioPage