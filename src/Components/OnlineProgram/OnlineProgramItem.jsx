import React from 'react';
import './OnlineProgramItem.css';

const OnlineProgramItem = ({ title, description, img1, img2, img3 }) => {
  return (
    <div className="program-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={`program-images ${img2 === undefined && img3 === undefined ? 'single-image' : ''}`}>
        {img1 && <img src={img1} alt="" />}
        {img2 && <img src={img2} alt="" />}
        {img3 && <img src={img3} alt="" />}
      </div>

    </div>
  );
};

export default OnlineProgramItem;
