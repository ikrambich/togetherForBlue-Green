import React ,{ useRef } from 'react'
import "./Achievement.css"
import Item from "../Team/TeamItem"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import stayTuned from "../../assets/stayTuned3.gif"

const item_Data=[{
      key:1,
        icon:stayTuned,
       
        },

]
const Achievement = () => {
   
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
        <div className="Achievement-section">
                <div className="AchievementContainer">
                    <hr className='left-lineAchievement'></hr>
                    <h1 className="AchievementTitle">🏆 Member Spotlight: Our Changemakers in Action</h1>
                    <hr className='right-lineAchievement'></hr> 
                </div>

                <div className="descriptionAchievementSection">
                    <p >
                    From attending international conferences to leading impactful campaigns, our members continue to drive change beyond the boundaries of our initiatives. This section highlights their remarkable achievements, leadership, and dedication to building a greener and more equitable future, one action at a time.                    </p>
                 </div>
                <div className="Achievement-scroll-wrapper">
                <button className="Achievementscroll-button left" onClick={() => scroll("left")}>
                <FaChevronLeft />
                </button>

    
                 <div className="Achievement-members" ref={scrollRef}>

                    
                        {item_Data.map((item,i)=>{
                            return < Item key={i} icon={item.icon} title={item.title} description={item.description} />

                        })}
                </div>
                <button className="Achievementscroll-button right" onClick={() => scroll("right")}>
                <FaChevronRight />
                </button>
      </div>
          
        </div>
        )
        }


export default Achievement
