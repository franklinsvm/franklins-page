import React from 'react'
import "./Expertise.css";

const ExpertiseItem = (props) => {
  return (
    <>
        <li className="expertise-item">
            <div className="expertise-item-pic-wrap">
            <img className="expertise-item-img" src={props.src} alt="Expertise" />
            </div>
            <div className="expertise-item-info">
                <h5 className="expertise-item-text">{props.text}</h5>
            </div>
        </li>
    </>
    )
}

export default ExpertiseItem