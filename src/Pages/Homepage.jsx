import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Hero from "../Components/Hero/Hero"
import AbouUs from "../Components/Aboutus/AboutUs"
import Programs from "../Components/Programs/Programs"
import Team from "../Components/Team/Team"
import ContactUS from "../Components/ContactUs/ContactUs"
import Partners from "../Components/Partners/Partners"
import Recruitment from "../Components/Recruitment/Recruitment"
import Achievement from "../Components/Achievement/Achievement"
import StoryTelling from "../Components/StoryTelling/StoryTelling"
import Blogs from "../Components/Blogs/Blogs"


const Homepage = () => {
  return (
    <>
      <Navbar />

      <div id="home" >
        <Hero />
      </div>

      <div className="section-container" id="about">
        <AbouUs />
      </div>

      <div className="section-container" id="programs">
        <Programs />
      </div>

      <div className="section-container" id="recruitment">
        <Recruitment />
      </div>

      <div className="section-container" id="StoryTelling">
        <StoryTelling />
      </div>

       <div className="section-container" id="Blogs">
        <Blogs />
      </div>

      <div className="section-container" id="team">
        <Team />
      </div>

      <div className="section-container" id="achievements">
        <Achievement />
      </div>

      <div className="section-container" id="partners">
        <Partners />
      </div>

      <div className="section-container" id="contact">
        <ContactUS />
      </div>
    </>
  );
};

export default Homepage;
