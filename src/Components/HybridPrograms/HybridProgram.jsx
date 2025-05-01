import React from 'react'
import "./HybridProgram.css"
import OnlineProgramItem from "../OnlineProgram/OnlineProgramItem"
import ai1 from '../../assets/ai1.jpg';
import ai2 from '../../assets/ai2.jpg';
import ai3 from '../../assets/ai3.jpg';
const programData = [
  {
    key:1,
    title: "🤖 Youth4AI Climate Resilience & Civic Engagement Program",
    description: "This 3-phase national program empowers Algerian youth to explore how artificial intelligence can support climate resilience and civic innovation. Designed by Together for Blue and Green and co-funded by the EU through the Anna Lindh Foundation, this initiative fosters capacity building, innovation, and local engagement",
    img1: ai1,
    img2:ai2,
    img3:ai3,
  },
 
];

const HybridProgram = () => {
  return (
    <div className="hybrid-programs-page">

    <div className="titleHybridPageContainer">
              <hr className='left-lineHybridPage'></hr>
              <h1 className="Hybridpage-title">🌐 Hybrid Programs</h1>
              <hr className='right-lineHybridPage'></hr>
              
          </div>
          <div className="HybridprogramsItems">
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
  )
}

export default HybridProgram
