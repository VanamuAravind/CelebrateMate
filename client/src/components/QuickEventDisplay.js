import React from 'react'
import './QuickEventDisplay.css'
const QuickEventDisplay = ({event}) => {
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
      ];
  return (
    <div className='event-dis-main-container'>
      {/* <label>{event.eventType}</label>
      <label>{event.eventName}</label>
      <label>{event.eventDescription}</label>
      <label>{event.reminderFrequency}</label>
      <label>{event.eventDate.getDate()}</label> */}
      <div className='calender-quick-view-banner' style={{gap:"5px"}}>
        <i class="fa-solid fa-calendar-days" style={{color:"grey",scale:"1.1"}}></i>
        <label className='common-grey-medium-bold' style={{fontSize:"20px"}}>{months[event.eventDate.getMonth()]} {event.eventDate.getDate()}, {event.eventDate.getFullYear()}</label>
      </div>
      <label className='common-big-heading' style={{fontSize:"38px",marginTop:"20px"}}>{event.eventName}</label>
      <label className='common-grey-font'>{event.eventDescription}</label>
      <label className='common-grey-medium-bold hyper-link'>{event.eventType}</label>
      <div className='calender-quick-view-banner' style={{gap:"5px",marginTop:"20px"}}>
        <i class="fa-solid fa-stopwatch" style={{color:"green",scale:"1.1"}}></i>
        <label className='common-grey-medium-bold' style={{fontSize:"20px",color:"green"}}>{event.reminderFrequency}</label>
      </div>
    </div>
  )
}

export default QuickEventDisplay
