import React from 'react'
import "./Dream.css"
import DreamCard from './DreamCard'

const Dream = () => {
  return (
      <div className="dream-container" id="dream-id">
        <div>
            <h1 className="section-title">You dream, I make I.T. happen!</h1>
        </div>
        <div className="dream-text">
         <p>I know I look like a "newbie" in the field of developing, designing and programming, but I can assure you I am an <span className="color-text">extremely commited and fast learner professional. </span>If you dare to "bet" on me, I will be <strong className="color-text">110% focused </strong>on being your <span className="color-text">best hiring <strong>EVER!</strong></span></p>
        </div>
        <div className="dream-steps">
            <DreamCard src="Imgs/bet.jpg" number="01" text="You BELIEVE in me (despite my lack of 'professional experience')"/>
            <DreamCard src="Imgs/together.jpg" number="02" text="We work together as a TEAM!" imageFirst={true} />
            <DreamCard src="Imgs/dreams.jpg" number="03" text="I make your dreams come TRUE!" />
        </div>
        </div>
  )
}

export default Dream