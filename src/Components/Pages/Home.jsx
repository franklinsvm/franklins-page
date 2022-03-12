import React from "react";
import "./Home.css";
import HeroSection from "../HeroSection";
import Expertise from "../Expertise";
import About from "../About";
import Dream from "../Dream";
import Options from "../Options";
import CV from "../CV";
import Contact from "../Contact";
import Footer from "../Footer";

function Home () {
    return (
        <div className="home-div">
            <HeroSection />
            <Expertise />
            <About />
            <Dream />
            <Options />
            <CV />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;