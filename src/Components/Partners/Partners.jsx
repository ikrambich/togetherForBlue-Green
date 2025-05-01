import React from 'react'
import "./Partners.css"
import embassyLogo from "../../assets/embassyLogo.png"
import euroLogo from "../../assets/euro.png"
import enssmallLogo from "../../assets/enssmall.png"
import annaLindLogo from "../../assets/anna-lind.png"
import youngooLogo from "../../assets/youngoo.png"
import technoLogo from "../../assets/technoo.png"
import lcoyLogo from "../../assets/LcoyLogo.png"



const Partners = () => {
  return (
    <div className="PartnersContainer">

    <div className="titlePratnersContainer">
        <hr className='left-linePartner'></hr>
        <h1 className="Partner-title">🤝 Our Partners</h1>
        <hr className='right-linePartner'></hr>
                    
    </div>
    <div className='Partners-Logo'>
        <img src={embassyLogo} alt=""></img>
        <img src={euroLogo} alt=""></img>
        <img src={enssmallLogo} alt=""></img>
        <img src={annaLindLogo} alt=""></img>
        <img src={youngooLogo} alt=""></img>
        <img src={technoLogo} alt=""></img>
        <img src={lcoyLogo} alt=""></img> 
    </div>
    </div>

  )
}

export default Partners
