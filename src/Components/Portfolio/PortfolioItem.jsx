import React from "react";
import "./PortfolioPage.css";

const PortfolioItem = (props) => {
    return (
      <>
          <li className="portfolio-item">
              <a href={props.url} target="_blank" rel="noreferrer">
              <div className="portfolio-item-pic-wrap">
              <img className="portfolio-item-img" src={props.src} alt="Mini project" />
              </div>
              <div className="portfolio-item-info">
                  <h5 className="portfolio-item-text">{props.text}</h5>
                  <p className="portfolio-item-expertise">{props.expertise}</p>
              </div>
              </a>
          </li>
      </>
      )
  }
  
  export default PortfolioItem