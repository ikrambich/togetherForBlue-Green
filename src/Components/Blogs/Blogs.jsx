import React ,{ useRef } from 'react'
import "./Blogs.css"
import Item from "../Team/TeamItem"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import stayTuned from "../../assets/stayTuned3.gif"

const item_Data=[{
      key:1,
        icon:stayTuned,
       
        },

]
const Blogs = () => {
   
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
        <div className="Blogs-section">
                <div className="BlogsContainer">
                    <hr className='left-lineBlogs'></hr>
                    <h1 className="BlogsTitle">📝Voices from the Ground: Youth Blog</h1>
                    <hr className='right-lineBlogs'></hr> 
                </div>

                <div className="descriptionBlogsSection">
                    <p >
                        Discover stories, ideas, and reflections straight from the heart of youth activism in the MENA region.
                        This blog is a living archive of the experiences, challenges, and victories of young changemakers working toward climate justice, gender equity, peacebuilding, and social transformation. Whether it's a personal journey, a policy critique, or a field report, every voice matters.<br></br> 
                        <strong>We look forward to receiving your pieces.</strong></p> 
                </div>
                <div className="Blogs-scroll-wrapper">
                <button className="Blogsscroll-button left" onClick={() => scroll("left")}>
                <FaChevronLeft />
                </button>

    
                 <div className="Blogs-members" ref={scrollRef}>

                    
                        {item_Data.map((item,i)=>{
                            return < Item key={i} icon={item.icon} title={item.title} description={item.description} />

                        })}
                </div>
                <button className="Blogsscroll-button right" onClick={() => scroll("right")}>
                <FaChevronRight />
                </button>
      </div>
          
        </div>
        )
        }


export default Blogs
