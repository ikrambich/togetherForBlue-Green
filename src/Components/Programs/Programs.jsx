import React from 'react';
import './Programs.css';
import online from '../../assets/online.jpeg';
import offline from '../../assets/offline.JPG';
import hybrid from '../../assets/hybridd.jpeg';
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div className="programs-section">
      <div className="titleProgramsContainer">
        <hr className="left-lineProgram" />
        <h1 className="programsTitle">📚 Explore Our Programs</h1>
        <hr className="right-lineProgram" />
      </div>

      <div className="programs-images">
        <div className="program">
          <Link to="/online">
            <img src={online} alt="Online Programs" className="online" />
            <p>🌐 Online Programs</p>
          </Link>
        </div>

        <div className="program">
          <Link to="/offline">
            <img src={offline} alt="Offline Programs" className="offline" />
            <p>🏛️ Offline Programs</p>
          </Link>
        </div>

        <div className="program">
          <Link to="/hybrid">
            <img src={hybrid} alt="Hybrid Programs" className="hybrid" />
            <p>🔄 Hybrid Programs</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programs;
