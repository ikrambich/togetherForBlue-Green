import React from 'react'
import "./Partners.css"
import embassyLogo from "../../assets/embassyLogo.png"
import euroLogo from "../../assets/euro.png"
import enssmallLogo from "../../assets/enssmall.png"
import annaLindLogo from "../../assets/anna-lind.png"
import youngooLogo from "../../assets/youngoo.png"
import technoLogo from "../../assets/technoo.png"
import lcoyLogo from "../../assets/LcoyLogo.png"
import iomLogo from "../../assets/IOM.jpg"
import denemarkLogo from "../../assets/denemark.jpg"
import ccmdLogo from "../../assets/ccmd.png"
import forasKhadraLogo from "../../assets/forasKhadra.jpg"
import ITCLogo from "../../assets/ITC.jpeg"
import festivalBleuLogo from "../../assets/festivalBleu.jpeg"
import aiesecLogo from "../../assets/aiesec.jpg"
import pathosLogo from "../../assets/pathos.jpg"
import euLogo from "../../assets/eu.png"



import greenGateLogo from "../../assets/greenGate.jpeg"


const Partners = () => {
  return (
    <div className="PartnersContainer">

    <div className="titlePratnersContainer">
        <hr className='left-linePartner'></hr>
        <h1 className="Partner-title">🤝 Our Partners</h1>
        <hr className='right-linePartner'></hr>
                    
    </div>
      <div className="Partners-Logo">
        <img className="logo" src={embassyLogo} alt="U.S. Embassy Algeria" loading="lazy" />
        <img className="logo" src={euroLogo} alt="Med Dialogue" loading="lazy" />
        <img className="logo" src={enssmallLogo} alt="ENSSMAL" loading="lazy" />
        <img className="logo" src={annaLindLogo} alt="Anna Lindh Foundation" loading="lazy" />
        <img className="logo" src={euLogo} alt="EU" loading="lazy" />

        <img className="logo" src={youngooLogo} alt="YOUNGO" loading="lazy" />
        <img className="logo" src={technoLogo} alt="Techno Stationery" loading="lazy" />
        <img className="logo" src={lcoyLogo} alt="LCOY Algeria" loading="lazy" />
        <img className="logo" src={iomLogo} alt="IOM" loading="lazy" />
        <img className="logo" src={denemarkLogo} alt="Denmark Embassy" loading="lazy" />
        <img className="logo" src={ccmdLogo} alt="CCMD" loading="lazy" />
        <img className="logo" src={forasKhadraLogo} alt="Foras Khadra" loading="lazy" />
        <img className="logo" src={ITCLogo} alt="ITC" loading="lazy" />
        <img className="logo" src={festivalBleuLogo} alt="Festival Bleu" loading="lazy" />
        <img className="logo" src={aiesecLogo} alt="Aiesec" loading="lazy" />
        <img className="logo" src={pathosLogo} alt="pathos" loading="lazy" />

        <img className="logo" src={greenGateLogo} alt="Green Gate" loading="lazy" />





      </div>

    </div>

  )
}

export default Partners
