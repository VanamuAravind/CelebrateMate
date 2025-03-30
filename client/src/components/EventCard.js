import React from 'react'
import './EventCard.css'
const EventCard = ({event,index}) => {
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
  return (
    <div className='event-small-container' style={{backgroundColor:getRandomColor()}}>
        <label>{event.name}</label>
    </div>
  )
}

export default EventCard
