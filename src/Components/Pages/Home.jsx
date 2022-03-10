import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Expertise from "../Expertise";
import About from "../About";
import Dream from "../Dream";
import Options from "../Options";
import CV from "../CV";
import Contact from "../Contact";

function Home () {
    return (
        <>
            <HeroSection />
            <Expertise />
            <About />
            <Dream />
            <Options />
            <CV />
            <Contact />
        </>
    )
}

export default Home;