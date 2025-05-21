import React ,{ useRef } from 'react'
import "./Recruitment.css"
import Item from "../Team/TeamItem"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LcoyPic from "../../assets/lcoyEd2.jpg"

const item_Data=[{
    key:1,
    icon:LcoyPic,
    title:"🌱 LCOY Algeria 2025 – Local Conference of Youth",
    description:"Together for Blue and Green is proud to host Algeria’s official youth climate conference ahead of COP30. LCOY Algeria 2025 will bring together young people from across the country to co-create solutions, influence national climate policies. Stay tuned!<br/><br/><a href='https://docs.google.com/forms/d/e/1FAIpQLScuGeitSCID3ArNCmmJKwOVOGrMVEfurYg3NhEDcrZVlvAbMA/viewform' >📢 Call for Partners & Speaker</a><br/><a href='#' onClick='event.preventDefault()'>🧑‍🤝‍🧑 Call for Delegates – Opens May 25th</a>"
    },

]
const Recruitment = () => {
   
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
        <div className="Recruitment-section">
                <div className="RecruitmentContainer">
                    <hr className='left-lineRecruitment'></hr>
                    <h1 className="RecruitmentTitle">📢 Open Programs</h1>
                    <hr className='right-lineRecruitment'></hr> 
                </div>

                <div className="descriptionRecruitmentSection">
                    <p >
                    Discover our current open calls, campaigns, and youth opportunities. Stay engaged and be part of the change — whether it's through workshops, conferences, or digital programs.
                    </p>
                 </div>
                <div className="Recruitment-scroll-wrapper">
                <button className="Recruitmentscroll-button left" onClick={() => scroll("left")}>
                <FaChevronLeft />
                </button>

    
                 <div className="Recruitment-members" ref={scrollRef}>

                    
                        {item_Data.map((item,i)=>{
                            return < Item key={i} icon={item.icon} title={item.title} description={item.description} />

                        })}
                </div>
                <button className="Recruitmentscroll-button right" onClick={() => scroll("right")}>
                <FaChevronRight />
                </button>
      </div>
          
        </div>
        )
        }

export default Recruitment
