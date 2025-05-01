import React from 'react'
import "./AboutUs.css"
import aboutOne from "../../assets/about1.jpg"
import aboutTwo from "../../assets/about2.jpg"
import aboutThree from "../../assets/about3.jpg"





const AboutUs = () => {
  return (
    <div className='about'>
        <div className="aboutText">
            <div className="aboutContainer">
                <hr className='left-line'></hr>
                <h1 className="aboutUsTitle"> 🌱 About Us </h1>
                <hr className='right-line'></hr>

            </div>
            <p className="aboutDescriptionPartOne">
            Together for Blue and Green is Algeria’s first anglophone, youth-led environmental NGO dedicated to promoting sustainability, climate resilience, and civic engagement. Founded by and for young changemakers, our mission is to protect natural ecosystems, empower youth with knowledge and tools, and drive forward local and regional solutions to global environmental challenges.
            </p>
            <p className="aboutDescriptionPartTwo">
            From organizing climate assemblies and policy dialogues to leading innovation in AI for environmental action, we believe that collective action starts with informed, empowered communities.
            </p>
        </div>

        <div className="images">
            <img src={aboutOne} alt="" className="aboutOne" />
            <img src={aboutTwo} alt="" className="aboutTwo" />
            <img src={aboutThree} alt="" className="aboutThree" />
        </div>

      
    </div>
  )
}

export default AboutUs
