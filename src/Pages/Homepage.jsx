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

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><AbouUs /></div>
      <div id="programs"><Programs /></div>
      <div id="recruitment"><Recruitment /></div>
      <div id="team"><Team /></div>
      <div id="achievements"><Achievement /></div>
      <div id="partners"><Partners /></div>
      <div id="contact"><ContactUS /></div>
    </>
  );
};


export default Homepage
