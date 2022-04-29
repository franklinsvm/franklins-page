import React from "react";
import "./Portfolio.css"
import PortfolioPage from "../Components/Portfolio/PortfolioPage";
import Header from "../Components/Header/Header";


function Portfolio () {
    return (
        <div className="portfolio-div">
            <Header />
            <PortfolioPage />
        </div>
    )
}

export default Portfolio;