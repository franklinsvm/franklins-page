import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about-id">
      <img
        src="Imgs/blue-light.jpg"
        className="blue-img"
        alt="blue rings of light"
      />
      <div className="about-content">
        <div className="about-text">
          <h2>Hard Worker, Problem Solver and Fast Learner!</h2>
          <p>
            <span class="color-text">
              Hard worker, problem solver and fast learner,{" "}
            </span>
            I am always with a book in hand and willing to learn something new.
            Graduated in Business Administration, I have worked alongside
            important businessmen before becoming a developer. I am very
            comfortable{" "}
            <span class="color-text">
              facing challenges, working with deadlines and being a team player
            </span>
            . Proactivity and communication are some of my strengths. But above
            all is my <span class="color-text">passion for learning.</span> And
            that is the reason I fell in love with{" "}
            <span class="color-text">app/web developing!</span> No matter how
            hard you study, there's always something new to learn!
          </p>
        </div>
        <div className="about-img">
          <img
            className="franklin-img"
            src="Imgs/Franklin.png"
            alt="Franklin Martins"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
