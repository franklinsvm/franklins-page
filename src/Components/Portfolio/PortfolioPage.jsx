import React from 'react'
import "./PortfolioPage.css"
import PortfolioItem from './PortfolioItem'

const PortfolioPage = () => {

  return (
    <div className="portfolio-container">
        <img className="portfolio-background" src="Imgs/aurora.jpg" alt="Northern Lights" />
        <div className="portfolio-wrapper">
            <ul className="portfolio-items portfolio-top" >
                <PortfolioItem src="Imgs/wordle.jpg" text="Wordle Clone" expertise="React, Typescript, Tailwind, Tests, Store, Zustand, Local Storage" url="https://f-wordle.netlify.app/" />
                <PortfolioItem src="Imgs/weather-app.png" text="Weather Forecast" expertise="React, Tailwind, External API, Moment.js" url="https://f-weather.herokuapp.com/" />
                <PortfolioItem src="Imgs/shop-app.jpeg" text="Shopping Cart" expertise="React, Typescript, Bootstrap, React Router, Context, Local Storage" url="https://f-shopping-cart.netlify.app" />
            </ul>
            <ul className="portfolio-items portfolio-middle" >
                <PortfolioItem src="Imgs/spreadsheet.png" text="Spreadsheet" expertise="React, Typescript, Chakra UI, React Memo, Local Storage" url="https://f-spreadsheet.netlify.app" />
                <div className="portfolio-center">
                    <img src="logo512.png" className="portfolio-img" alt="/" />
                    <span>My Projects!</span>
                </div>
                <PortfolioItem src="Imgs/google-clone.png" text="Google Clone" expertise="React, Tailwind, External API, React Router, Context, Light/Dark Theme" url="https://f-google-clone.herokuapp.com/search" />
            </ul>
            <ul className="portfolio-items portfolio-bottom" >
                <PortfolioItem src="Imgs/calculator.png" text="Calculator" expertise="React, Logic, Reducer, CSS" url="https://f-calculator.herokuapp.com/" />
                <PortfolioItem src="Imgs/github.png" text="GitHub" url="https://github.com/franklinsvm" />
                <PortfolioItem src="logo512.png" text="Under Construction" url="/" />
            </ul>
        </div>
    </div>
  )
}

export default PortfolioPage