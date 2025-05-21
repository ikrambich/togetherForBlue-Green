import React ,{ useRef } from 'react'
import "./StoryTelling.css"
import Item from "../Team/TeamItem"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import stayTuned from "../../assets/staytuned3.gif"




const item_Data=[{
    key:1,
    icon:stayTuned ,

    },

]
const StoryTelling = () => {
    const scrollRef = useRef(null);
    
    const scroll = (direction) => {
        const { current } = scrollRef;
        const cardWidth = current.firstChild.offsetWidth + 40; // 40 is the gap
          
        if (direction === "left") {
            current.scrollBy({ left: -cardWidth, behavior: "smooth" });
        } else {
            current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }};
  return (
    
    <div>

        <div className="StoryTelling-section">
                <div className="StoryTellingContainer">
                    <hr className='left-lineStoryTelling'></hr>
                    <h1 className="StoryTellingTitle">🦋✨Heroic Journeys of MENA Girls: Stories of Activism and Resilience</h1>
                    <hr className='right-lineStoryTelling'></hr> 
                </div>

                <div className="descriptionStoryTellingSection">
                    <p >
                   This space celebrates the powerful voices and unstoppable spirit of girls and young women across the MENA region who are shaping change in their communities. From climate activism and education advocacy to human rights and peacebuilding, these stories reflect courage, resilience, and hope. Each journey is a testament to what happens when determination meets purpose, inspiring a generation and rewriting the narrative of what it means to lead.
                    </p>
                 </div>
                <div className="StoryTelling-scroll-wrapper">
                <button className="StoryTellingscroll-button left" onClick={() => scroll("left")}>
                <FaChevronLeft />
                </button>

    
                 <div className="StoryTelling-members" ref={scrollRef}>

                    
                        {item_Data.map((item,i)=>{
                            return < Item key={i} icon={item.icon} title={item.title} description={item.description} />

                        })}
                </div>
                <button className="StoryTellingscroll-button right" onClick={() => scroll("right")}>
                <FaChevronRight />
                </button>
      </div>
          
        </div>
      
    </div>
  )
}

export default StoryTelling





   
   


