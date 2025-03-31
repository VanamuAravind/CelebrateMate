import React, { useState } from 'react'
import './CalenderTile.css'
import EventCard from './EventCard'
const CalenderTile = ({index,date,events,changeVis,setCurrentSelectedDate,idx}) => {
    
    // events = {name}
  return (
    <div className='calender-tile-container'>
      <i class="fa-solid fa-expand" onClick={()=>{
        changeVis()
        setCurrentSelectedDate(date)
        }}></i>
      <div className='calender-tile-top'>
        <label>{date.getDate()}</label>
      </div>
      <div className='calender-tile-bottom'>
        {
            events.map((event,i)=>{
                return <EventCard event={event} index={i} expandon={(idx>5)?"left":"right"}/>
            })
        }
      </div>
      
    </div>
  )
}

export default CalenderTile
