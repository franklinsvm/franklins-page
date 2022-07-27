import React from 'react'
import "./CV.css"

const CV = () => {

  const onClickCV = () => {
    const position = document.getElementById("contact-id").offsetTop;
    window.scrollTo({top: position})
}

  return (
    <div className="curriculum-container" id="curriculum-id">
        <div className="curriculum-img">
            <img src="Imgs/polar-lights.jpg" alt="Polar Lights" />
        </div>
        <div className="curriculum-options">
            <div className="curriculum-option">
            <div>
            <ion-icon name="document-text-outline" color="light" size="large" ></ion-icon>
            </div>
            <h6>You can check my Curriculum Vitae <a href="FM CV Dev.pdf" target="_blank">here!</a></h6>    
            </div>
            <div className="curriculum-option">
            <ion-icon name="add-circle-outline" color="light" size="large" ></ion-icon>
            <h6>You can help me IMPROVE my Curriculum Vitae<button className="btn-cv" onClick={onClickCV}>here!</button></h6>    
            </div>
        </div>
    </div>
  )
}

export default CV