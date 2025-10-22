import React from 'react'
import "./Statement.css"
import lcoyPic1 from "../../../assets/lcoypic1.jpg"
import seperator from "../../../assets/seperator.png"

const Statement = () => {
  return (
    <div className='statementSection'>
        <h1 className="titleStatment">
             Local Conference of Youth (LCOY) Algeria 2025
        </h1>
        <img className=" mainImage"src={lcoyPic1} alt="Lcoy picture"></img>
        <div className="buttonsStatement">
            <button onClick={() => window.open("https://drive.google.com/file/d/1ae5zY70pk12ZXtFtkd-7AkQx2aAidu5k/view", "_blank")}  className='NYSButton'>Read NYS of LCOY Algeria 2025</button>
            <button  onClick={() => window.open("https://www.instagram.com/lcoy.algeria.2025/", "_blank")} className='instagramButton'>Check Out For More on Instagram</button>

        </div>
        <img className='seperator' src={seperator} alt="seperator"></img>

      
    </div>
  )
}

export default Statement
