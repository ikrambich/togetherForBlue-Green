import React from 'react';
import "./HeroLcoy.css"
import lcoyvideo from '../../../assets/lcoyvideo.mp4';

const HeroLcoy = () => {
  return (
    <div className="HeroLcoyContainer">
      <video
        autoPlay
        muted
        loop
        className="myVideo"
        playsInline
      >
        <source src={lcoyvideo}  type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="textLcoy">
        <h1 className="heroLcoyTitle">
          FROM LOCAL CLIMATE DIALOGUE TO GLOBAL ACTION
        </h1>
        <p className="heroLcoySubheadline">
          How LCOY Algeria 2025 empowers young voices to shape the national climate agenda
          and connect with global climate policy discussions.
        </p>
      </div>
    </div>
  );
};

export default HeroLcoy;
