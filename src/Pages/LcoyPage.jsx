import React from 'react'
import "./LcoyPage.css"
import Navbar from "../Components/Navbar/Navbar"
import HeroLcoy from "../Components/Lcoy/HeroSection/HeroLcoy"
import Statement from '../Components/Lcoy/Statement/Statement'
import LCOYDef from '../Components/Lcoy/LCOYDEF/LCOYDef'
import LcoyActivities from '../Components/Lcoy/LcoyActivities/LcoyActivities'
import VideoTestimonials from "../Components/Lcoy/VideoTestimonials/VideoTestimonials"
import PhotoGallery from '../Components/Lcoy/PhotoGallery/PhotoGallery'
const LcoyPage = () => {
  return (
    <div className="lcoyPage" >
        <Navbar></Navbar>
        <HeroLcoy></HeroLcoy>
        <Statement></Statement>
        <LCOYDef></LCOYDef>
        <LcoyActivities></LcoyActivities>
        <VideoTestimonials></VideoTestimonials>
        <PhotoGallery></PhotoGallery>
      
    </div>
  )
}

export default LcoyPage;
