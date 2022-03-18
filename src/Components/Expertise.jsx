import React from 'react'
import "./Expertise.css";
import ExpertiseItem from "./ExpertiseItem";


const Expertise = () => {
  return (
    <div className="expertise-container" id="expertise-id">
        <img className="expertise-background" src="/Imgs/stars.jpg" alt="Night sky"/>
        <h1 className="section-title">Expertise:</h1>
        <div className="items-container">
            <div className="items-wrapper">
                <ul className="expertise-items expertise-1" >
                    <ExpertiseItem src="Imgs/React.png" text="React.js" progBar="1"/>
                    <ExpertiseItem src="Imgs/js.png" text="JavaScript" progBar="2"/>
                </ul>
                <ul className="expertise-items" >
                    <ExpertiseItem src="Imgs/html.png" text="HTML" progBar="3"/>
                  <ExpertiseItem src="Imgs/css.png" text="CSS" progBar="4"/>
                  <ExpertiseItem src="Imgs/git.png" text="Git & GitHub" progBar="5"/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Expertise