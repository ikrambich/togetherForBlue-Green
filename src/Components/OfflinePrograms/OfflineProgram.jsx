import React from 'react'
import "./OfflineProgram.css"
import OnlineProgramItem from "../OnlineProgram/OnlineProgramItem"

import lcoyEd2 from '../../assets/lcoyEd2.jpg';


import abdou1 from '../../assets/abdou1.jpg';
import abdou2 from '../../assets/abdou2.jpg';
import abdou3 from '../../assets/abdou3.jpg';

import lcoy1 from '../../assets/lcoy1.jpg';
import lcoy2 from '../../assets/lcoy2.jpg';
import lcoy3 from '../../assets/lcoy3.jpg';

import recycle1 from '../../assets/recycle1.jpeg';
import recycle2 from '../../assets/recycle2.jpeg';
import recycle3 from '../../assets/recycle3.jpeg';

import it1 from '../../assets/it4.jpeg';
import it2 from '../../assets/it2.jpeg';
import it3 from '../../assets/it3.jpeg';

import draw1 from '../../assets/draw1.jpeg';
import draw2 from '../../assets/draw2.jpeg';
import draw3 from '../../assets/draw3.png';

import st11 from '../../assets/st1-1.jpg';
import st12 from '../../assets/st1-2.jpg';
import st13 from '../../assets/st1-3.png';

import st21 from '../../assets/st2-1.jpeg';
import st22 from '../../assets/st2-2.jpg';
import st23 from '../../assets/st2-3.jpg';
const programData = [
    {
        key:1,
        title: "🌍 Big Announcement: LCOY Algeria 2025 is Coming!",
        description: "We’re thrilled to announce that Together for Blue and Green has officially been endorsed to host LCOY Algeria 2025! This historic youth-led conference will gather voices from across the country to shape climate policy ahead of COP30. Stay tuned — this is just the beginning of something big.",
        img1: lcoyEd2,
     
      },
    {
        key:2,
        title: "💧 Water Security Network Launch – Advocacy for a Sustainable Tomorrow",
        description: "Together for Blue and Green joined the national launch of the “Water Security and Sustainable Development Network” in Cap Djinet. Represented by Lehouidj Abdallah, our team engaged in policy discussions, workshops, and exchanges focused on youth leadership and environmental preservation for a water-secure future.",
        img1: abdou1,
        img2:abdou2,
        img3:abdou3,
      },
    {
        key:3,
        title: "Algeria 2.0 Summit – Tech for Sustainability & Innovation",
        description: "At Algeria 2.0, our team delivered powerful workshops and sessions on IT and Sustainability, AI-driven entrepreneurship in Africa, and Blockchain fundamentals. From green tech to startup growth, the summit showcased how youth and innovation can drive impact through technology.",
        img1: it1,
        img2:it2,
        img3:it3,
      },
  
  
      {
        key:4,
        title: "📚 ♻️ Recycle Challenge",
        description: "In collaboration with Colibri and MAPED, and sponsored by Techno, we hosted an interactive Recycle Challenge to inspire sustainable habits among kids. Through hands-on eco-activities, we turned waste into creative treasures and educated the next generation on the importance of recycling and environmental care.",
        img1: recycle1,
        img2:recycle2,
        img3:recycle3,
      },
    {
        key:5,
        title: "📚 National Book Fair Participation – SILA",
        description: "Together for Blue and Green joined the Algiers International Book Fair (SILA) in October 2023 with a creative booth featuring youth and children-focused environmental activities. In collaboration with Techno Stationery, we inspired young minds through eco-education, fun workshops, and engaging green storytelling.",
        img1: draw1,
        img2:draw2,
        img3:draw3,
      },
      {
        key:6,
        title: "🌱 LCOY Algeria 1st Edition – Youth Leading Climate Action",
        description: "Held at USTHB, the first Local Conference of Youth (LCOY) in Algeria brought together passionate changemakers to turn climate challenges into opportunities. Co-organized with Youth Led Algeria, the event empowered youth through impactful discussions and solution-oriented sessions.",
        img1: lcoy1,
        img2:lcoy2,
        img3:lcoy3,
      },

    {
        key:7,
        title: "🌍 Student Climate Call – 2nd Edition",
        description: "On August 13, 2023, we brought back our much-loved Student Climate Call , this time with even greater impact! Hosted in partnership with the U.S. Embassy, this edition featured inspiring speakers, youth-led discussions, and hands-on workshops, empowering Algerian students to turn dialogue into action for the planet.",
        img1: st21,
        img2:st22,
        img3:st23,
    },
    {
        key:8,
        title: "🌍 Student Climate Call Edition 1 – In-Person Dialogue for Climate Solutions",
        description: "Held at the National School of Marine Sciences (ENSSMAL) in Algiers, this was our first in-person event bringing students together to debate, negotiate, and present ideas on climate challenges. Participants explored the global climate crisis from a local lens, shared solutions, and even competed in climate challenges for prizes. It was an empowering moment for youth climate leadership in Algeria!",
        img1: st11,
        img2:st12,
        img3:st13,
    },

];

const OfflineProgram = () => {
    return (
        <div className="offline-programs-page">
    
          <div className="titleOfflineProgramsContainer">
                    <hr className='left-lineOfflinePage'></hr>
                    <h1 className="Offlinepage-title">🌐 Offline Programs</h1>
                    <hr className='right-lineOfflinePage'></hr>
                    
                </div>
                <div className="OfflineprogramsItems">
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
}

export default OfflineProgram
