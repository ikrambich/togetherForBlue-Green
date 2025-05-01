import React from 'react';
import OnlineProgramItem from './OnlineProgramItem';
import './OnlineProgram.css';

import workshop1 from '../../assets/workshop1.png';
import workshop2 from '../../assets/workshop2.png';
import workshop3 from '../../assets/workshop3.png';
import youngo1 from '../../assets/youngo1.png';
import youngo2 from '../../assets/youngo2.png';
import youngo3 from '../../assets/youngo3.png';
import inspire1 from '../../assets/inspire1.png';
import inspire2 from '../../assets/inspire2.png';
import inspire3 from '../../assets/inspire3.png';
import live1 from '../../assets/live1.png';
import live2 from '../../assets/live4.jpg';
import live3 from '../../assets/live3.png';
const programData = [
  {
    key:1,
    title: "📣 🎙️ Live Sessions: Youth Voices",
    description: "Our Live Sessions are dynamic online conversations featuring youth leaders, climate advocates, engineers, and changemakers from across the MENA and African regions. Each session dives into a key theme, from land restoration and food waste to regional youth conferences and COP reflections, creating an open space for learning, exchange, and action. Whether discussing agroecology, eco-tourism, climate justice, or local solutions, these interactive events spotlight the experiences and knowledge of young experts working for a greener, fairer future.",
    img1: live1,
    img2:live2,
    img3:live3,
  },
  {
    key:2,
    title: "📣 Inspire for Change Talks – Instagram Live Series",
    description: "A dynamic Instagram Live series hosted by Together for Blue and Green, Inspire for Change Talks brings together youth leaders, activists, and experts from across Africa and the MENA region to reflect on key environmental topics, from COP28 outcomes to eco-tourism and youth advocacy. These interactive sessions give voice to young changemakers and explore real-world solutions for a sustainable and inclusive future.",
    img1: inspire1,
    img2:inspire2,
    img3:inspire3,
  },
  {
    key:3,
    title: "🌿 MENA Youth Environmental Assembly (YEA)",
    description: "This two-part virtual assembly united young environmentalists from across the MENA region to strengthen youth action for sustainability and climate justice. In collaboration with YOUNGO, Peace First, and UNMGCY, the sessions focused on environmental protection, climate advocacy, and community-based solutions, highlighting the role of youth in safeguarding ecosystems and influencing regional policies.",
    img1: youngo1,
    img2:youngo2,
    img3:youngo3,
  },
  {
    key:4,
    title: "Online Workshop Series: Youth for Climate and Change",
    description: "This online series brought together young leaders from across the MENA region to share knowledge, inspire action, and promote environmental solutions. Through expert talks, storytelling, and interactive sessions, participants explored climate justice, eco-entrepreneurship, and community leadership, all from the comfort of their homes.",
    img1: workshop1,
    img2:workshop2,
    img3:workshop3,
  }
];

const OnlineProgram = () => {
  return (
    <div className="online-programs-page">

      <div className="titleProgramsPageContainer">
                <hr className='left-lineProgramPage'></hr>
                <h1 className="page-title">🌐 Online Programs</h1>
                <hr className='right-lineProgramPage'></hr>
                
            </div>
            <div className="programsItems">
              {programData.map((program, index) => (
                <OnlineProgramItem
                  key={index}
                  title={program.title}
                  description={program.description}
                  img1={program.img1}
                  img2={program.img2}
                  img3={program.img3}
                />
              ))}

            </div>
   
    </div>
  );
};

export default OnlineProgram;
