import React from 'react'
import "./CV.css"

const CV = () => {
  return (
    <section className="curriculum-container">
        <div className="curriculum-img">
            <img src="Imgs/polar-lights.jpg" alt="Polar Lights" />
        </div>
        <div className="curriculum-options">
            <div className="curriculum-option">
            <h6>You can check my Curriculum Vitae here!</h6>    
            </div>
            <div className="curriculum-option">
            <h6>You can help me IMPROVE my Curriculum Vitae here!</h6>    
            </div>
        </div>
    </section>
  )
}

export default CV