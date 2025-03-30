import React, { useState } from 'react'
import './EventCard.css'
const EventCard = ({event,index,dontexpand,setCurrentSelectedEvent,isSelected}) => {
    const [expand,setExpand] = useState(false)
    const [bg,setBG] = useState(getRandomColor())
    function getRandomColor() {
        const colors = [
            "#FF6B6B", "#FF8E72", "#FFA94D", "#FFD43B", "#74C0FC",
            "#4D96FF", "#6A4C93", "#BE4BDB", "#F06595", "#E64980",
            "#38BDF8", "#22D3EE", "#34D399", "#4ADE80", "#A3E635",
            "#FFD700", "#FFB400", "#FF6F61", "#D97706", "#9333EA"
        ];
        
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    function onMouseEnter(){
        if(!dontexpand){
            setExpand(true)
        }
    }
    function onMouseLeave(){
        if(!dontexpand){
            setExpand(false)
        }
    }
  return (
    <div className={(isSelected)?"event-small-container event-quick-border":'event-small-container'}
    onMouseEnter={onMouseEnter} 
    onMouseLeave={onMouseLeave}
    onClick={()=>{
        setCurrentSelectedEvent(event)
    }}
    style={{
        backgroundColor:bg,
        marginTop:(dontexpand)?"0px":(index===0)?"0px":"-20px",
        zIndex:(expand)?"100":5-index,
        width:(expand && !dontexpand)?"200%":"100%"
        }}>
        <label style={{maxWidth:(dontexpand)?"100%":(expand)?"300px":"100px",fontWeight:(expand)?"bold":"normal"}}>{event.eventName}</label>
        {expand && <label style={{overflow:'visible',fontSize:"12px"}}>{event.eventDescription}</label>}
        {dontexpand && <label style={{overflow:'visible',fontSize:"12px"}}>{event.eventDescription}</label>}
    </div>
  )
}

export default EventCard
