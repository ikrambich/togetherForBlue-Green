import React, { useRef } from 'react';
import "./Team.css"
import Item from "./TeamItem"
import ikramPic from "../../assets/ikram.jpg"
import selmaPic from "../../assets/selmaTwo.jpg"
import aminaPic from "../../assets/amina.jpeg"
import rayanPic from "../../assets/rayan.jpeg"
import abdouPic from "../../assets/abdou.jpeg"
import assiaPic from "../../assets/assia.jpeg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const item_Data=[{
        key:1,
        icon:selmaPic,
        title:"Selma Bichbich",
        description:"Founder & Executive Director"
        },
        {
            key:2,
            icon:aminaPic,
            title:"Amina Ait Yahiatene",
            description:"Human Resources Department"
                
            },
    
        {
        key:3,
        icon:assiaPic,
        title:"Assia Benfeghoul",
        description:"Media & Communication Department"
            
        },
        {
        key:4,
        icon:abdouPic,
        title:"Lehouidj Abdallah",
        description:"Logistics & Event Organization Department"       
        },
        {
        key:5,
        icon:rayanPic,
        title:"Rayane Tobbeche",
        description:"Strategic Planning & Fundraising Department"       
        },
        {
            key:6,
            icon:ikramPic,
            title:"Ikram Bichbich",
            description:"Head of Innovation & Technical Support"
            
            },
 
    ]



const Team = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        const cardWidth = current.firstChild.offsetWidth + 40; // 40 is the gap
      
        if (direction === "left") {
          current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        } else {
          current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      };
      
  return (
       <div className="Teams-section">
                <div className="titleTeamsContainer">
                    <hr className='left-lineTeam'></hr>
                    <h1 className="teamTitle">💚 Meet Our Team</h1>
                    <hr className='right-lineTeam'></hr> 
                </div>

                <div className="descriptionTeamSection">
                    <p className="descriptionTeamSection">
                    Together for Blue and Green is proudly a youth-led organization, made up of passionate young leaders from diverse regions across Algeria. Our team reflects the strength of local communities and ensures inclusivity, representation, and collaboration in everything we do.
                    </p>
                    <p className="descriptionTeamSection">To organize our work efficiently and drive impact at scale, our team is structured into seven specialized departments, each focused on a key area of action:</p>
                    <ol className='departmentList'>
                        <li className='departmentList'>💡 Innovation & Technical Support</li>
                        <li className='departmentList'>📣 Media & Communication</li>
                        <li className='departmentList'>⚙️ Logistics & Event Organization Department</li>
                        <li className='departmentList'>📊 Strategic Planning & Fundraising Department</li>
                        <li className='departmentList'>👥 Human Resources Department</li>
                    </ol>

                    <p className="descriptionTeamSection">Each department is led by a dedicated youth head who coordinates efforts within their focus area to contribute to our shared mission of environmental and civic transformation.</p>
                </div>
                <div className="team-scroll-wrapper">
                <button className="scroll-button left" onClick={() => scroll("left")}>
                <FaChevronLeft />
                </button>

    
                 <div className="team-members" ref={scrollRef}>

                    
                        {item_Data.map((item,i)=>{
                            return < Item key={i} icon={item.icon} title={item.title} description={item.description} />

                        })}
                </div>
                <button className="scroll-button right" onClick={() => scroll("right")}>
                <FaChevronRight />
                </button>
      </div>
          
        </div>
  )
}

export default Team
