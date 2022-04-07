import React from "react";
import "./Home.css";
import HeroSection from "../Components/HeroSection";
import Expertise from "../Components/Expertise";
import About from "../Components/About";
import Dream from "../Components/Dream";
import Options from "../Components/Options";
import CV from "../Components/CV";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import PortClip from "../Components/PortClip";
import Header from "../Components/Header";

function Home () {
    return (
        <div className="home-div">
            <Header />
            <HeroSection />
            <PortClip />
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