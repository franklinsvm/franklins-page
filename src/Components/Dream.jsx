import React from 'react'
import "./Dream.css"
import DreamCard from './DreamCard'

const Dream = () => {
  return (
      <div className="dream-container">
        <div>
            <h1 className="dream-title">You dream, I make I.T. happen!</h1>
        </div>
        <div className="dream-text">
         <p>I know I look like a "newbie" in the field of developing, designing and programming, but I can assure you I am an <span className="color-text">extremely commited and fast learner professional. </span>If you dare to "bet" on me, I will be <strong className="color-text">110% focused </strong>on being your <span className="color-text">best hiring <strong>EVER!</strong></span></p>
        </div>
        <div className="dream-steps">
            <DreamCard src="Imgs/bet.jpg" text="1. You BELIEVE in me (despite my lack of 'professional experience')"/>
            <DreamCard src="Imgs/together.jpg" text="2. We work together as a TEAM!"/>
            <DreamCard src="Imgs/dreams.jpg" text="3. I make your dreams come TRUE!" />
        </div>
        </div>
  )
}

export default Dream