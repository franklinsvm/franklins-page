import React from 'react'
import "./Expertise.css";
import ExpertiseItem from "./ExpertiseItem";


const Expertise = () => {
  return (
    <div className="expertise-container" id="expertise-id">
        <img className="expertise-background" src="/Imgs/stars.jpg" alt="Night sky"/>
        <h1 className="expertise-title">Expertise:</h1>
        <div className="items-container">
            <div className="items-wrapper">
                <ul className="expertise-items expertise-1" >
                    <ExpertiseItem src="Imgs/React.png" text="React.js"/>
                    <ExpertiseItem src="Imgs/js.png" text="JavaScript" />
                </ul>
                <ul className="expertise-items" >
                    <ExpertiseItem src="Imgs/html.png" text="HTML"/>
                  <ExpertiseItem src="Imgs/css.png" text="CSS" />
                  <ExpertiseItem src="Imgs/git.png" text="Git & GitHub"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Expertise