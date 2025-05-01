import React from 'react'
import "./TeamItem.css"

const TeamItem = (props) => {
  return (
    <div className="TeamitemWrapper">
        <div className="TeamImg">
                <img src={props.icon} alt=""/>
        </div>
        <div className="TeamInformation">
            <p className="TeamItemName" >{props.title}</p>
            <p className="TeamItemDescription"> {props.description}</p>
        </div>



        </div>

  )
}

export default TeamItem
