import React from 'react'
import "./Dream.css"

const DreamCard = (props) => {
  return (
    <>
      <li className="dream-item">
        {props.imageFirst ?
        <>
        <div className="dream-item-pic-wrap">
          <img className="dream-item-img" src={props.src} alt="Dream step" />  
        </div>
        <div className="dream-item-info">
          <span className="dream-item-number">{props.number}</span>
          <h3 className="dream-item-text">{props.text}</h3>
        </div>
        </>
        :
        <>
        <div className="dream-item-info">
        <span className="dream-item-number">{props.number}</span>
        <h3 className="dream-item-text">{props.text}</h3>
      </div>
      <div className="dream-item-pic-wrap">
          <img className="dream-item-img" src={props.src} alt="Dream step" />  
        </div>
      </>
      }
      </li>
    </>
  )
}

export default DreamCard