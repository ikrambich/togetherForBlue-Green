import React from 'react';
import "./LCOYDef.css";
import introLcoy from "../../../assets/introLcoy.png";

const LCOYDef = () => {
  return (
    <div className='LcoyDef'>
      <div className="textLcoyDef">
        <h1 className='titleLcoyDef'>WHAT IS LCOY?</h1>
        <p className="paragraphLcoyDef">
          The Local Conference of Youth (LCOY) is a youth-led platform under YOUNGO, 
          the UN’s official youth constituency on climate change. It empowers young people 
          to discuss national climate challenges, craft actionable solutions, and bring 
          their voices from local dialogues to global negotiations at the UN Climate 
          Conference (COP).
        </p>
        <p className='newsLcoyDef'>This year, Together for Blue and Green served as the focal point for hosting LCOY Algeria 2025, uniting passionate youth to drive collective action for a sustainable future.</p>
      </div>
      <div className="imgLcoyDef">
        <img className='lcoyGrpPic' src={introLcoy} alt="Lcoy Group Picture taken in LCOY Algeria 2025" />
      </div>
    </div>
  );
}

export default LCOYDef;
