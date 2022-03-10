import React from 'react'
import "./About.css"

const About = () => {
  return (
    <section className="about-container">
        <div className="about-content">
            <div className="about-text">
                <h2>Hard-working, Responsible, Fast Learner!</h2>
                <p>If you are looking for a <span class="color-text">hard-working, responsible and fast learner </span>web/app developer, it is your lucky day! Graduated in Business Administration, I have worked alongside important businessmen before becoming a developer. I am very comfortable <span class="color-text">facing challenges, working with deadlines and being a team player</span>. My communications skill is one of my strengths. But above all is my <span class="color-text">passion for learning.</span> And that is the reason I fell in love with <span class="color-text">app/web developing!</span> No matter how hard you study, there's always something new to learn!</p>
            </div>
            <div className="about-img">
                <img className="franklin-img" src="Imgs/FranklinM.png" alt="Franklin Martins" />
            </div>
        </div>
    </section>
  )
}

export default About