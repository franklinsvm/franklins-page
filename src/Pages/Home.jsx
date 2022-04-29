import React from "react";
import "./Home.css";
import HeroSection from "../Components/Home/HeroSection";
import Expertise from "../Components/Home/Expertise";
import About from "../Components/Home/About";
import Dream from "../Components/Home/Dream";
import Options from "../Components/Home/Options";
import CV from "../Components/Home/CV";
import Contact from "../Components/Home/Contact";
import Footer from "../Components/Home/Footer";
import PortClip from "../Components/Sidebar/PortClip";
import Header from "../Components/Header/Header";

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