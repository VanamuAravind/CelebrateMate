import React from 'react'
import './EventCard.css'
const EventCard = ({event,index}) => {
  return (
    <div className='event-small-container'>
        <label>{event.name}</label>
    </div>
  )
}

export default EventCard
