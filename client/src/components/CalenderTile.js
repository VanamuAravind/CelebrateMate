import React from 'react'
import './CalenderTile.css'
import EventCard from './EventCard'
const CalenderTile = ({date,events}) => {
    // events = {name}
  return (
    <div className='calender-tile-container'>
      <div className='calender-tile-top'>
        <label>{date}</label>
      </div>
      <div className='calender-tile-bottom'>
        {
            events.map((event,i)=>{
                return <EventCard event={event} index={i}/>
            })
        }
      </div>
    </div>
  )
}

export default CalenderTile
