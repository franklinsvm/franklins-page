import React from 'react'
import "./Expertise.css";

const ExpertiseItem = (props) => {
  return (
    <>
        <li className="expertise-item">
            <div className="expertise-icons">
              <img className="expertise-icon icon1" src={props.icon1} />
              <img className="expertise-icon icon2" src={props.icon2} />
              <img className="expertise-icon icon3" src={props.icon3} />
            </div>
            <div className="expertise-item-pic-wrap">
            <img className="expertise-item-img" src={props.src} alt="Expertise" />
            </div>
            <div className="expertise-item-info">
                <h5 className="expertise-item-text">{props.text}</h5>
            </div>
            <div className="expertise-bar">
              <div className={"progress-bar" + props.progBar}></div>
            </div>
        </li>
    </>
    )
}

export default ExpertiseItem