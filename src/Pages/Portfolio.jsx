import React from "react";
import "./Portfolio.css"
import PortfolioPage from "../Components/PortfolioPage";
import Header from "../Components/Header";


function Portfolio () {
    return (
        <div className="portfolio-div">
            <Header />
            <PortfolioPage />
        </div>
    )
}

export default Portfolio;