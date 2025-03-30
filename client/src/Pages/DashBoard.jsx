import React, { useEffect, useReducer, useRef, useState } from 'react'
import './DashBoard.css'
import CalenderTile from '../components/CalenderTile';
import EventCard from '../components/EventCard';
import QuickEventDisplay from '../components/QuickEventDisplay';

// import '../Pages/DashBoard.css'

const DashBoard = () => {
  var events = [
    {
      eventType: "Meeting",
      eventName: "Team Standup",
      eventDescription: "Daily team meeting to discuss progress and blockers.",
      eventDate: new Date(2025, 3, 1), // April 1, 2025 (Months are 0-based in JS)
      reminderFrequency: "Daily"
    },
    {
      eventType: "Conference",
      eventName: "Tech Summit 2025",
      eventDescription: "Annual technology conference covering latest trends.",
      eventDate: new Date(2025, 5, 15), // June 15, 2025
      reminderFrequency: "Weekly"
    },
    {
      eventType: "Birthday",
      eventName: "John's Birthday",
      eventDescription: "John's birthday celebration at the office.",
      eventDate: new Date(2025, 6, 22), // July 22, 2025
      reminderFrequency: "Yearly"
    },
    {
      eventType: "Webinar",
      eventName: "AI in 2025",
      eventDescription: "A webinar discussing advancements in AI.",
      eventDate: new Date(2025, 4, 10), // May 10, 2025
      reminderFrequency: "Monthly"
    },
    {
      eventType: "Holiday",
      eventName: "Independence Day",
      eventDescription: "National holiday celebration.",
      eventDate: new Date(2025, 3, 15), // August 15, 2025
      reminderFrequency: "Yearly"
    },
    {
      eventType: "Birthday",
      eventName: "John's Birthday",
      eventDescription: "John's birthday celebration at the office.",
      eventDate: new Date(2025, 2, 22), 
      reminderFrequency: "Yearly"
    },
    {
      eventType: "Webinar",
      eventName: "AI in 2025",
      eventDescription: "A webinar discussing advancements in AI.",
      eventDate: new Date(2025, 2, 15),
      reminderFrequency: "Monthly"
    },
    {
      eventType: "Holiday",
      eventName: "Independence Day",
      eventDescription: "National holiday celebration.",
      eventDate: new Date(2025, 3, 15),
      reminderFrequency: "Yearly"
    }
  ];
  
  const [showQuickView,setShowQuickView] = useState(false)
  const [currentSelectedDate,setCurrentSelectedDate]=useState()
  const [currentSelectedEvent,setCurrentSelectedEvent] = useState(events[0])

  const getEventsOnDay = (date)=>{
    return events.filter((event,i)=>event.eventDate.getFullYear()==date.getFullYear() && event.eventDate.getDate()==date.getDate() && event.eventDate.getMonth()==date.getMonth())
  }
  function changeVis(){
      setShowQuickView(!showQuickView)
  }
  useEffect(()=>{
    if(currentSelectedDate){
      setCurrentSelectedEvent(getEventsOnDay(currentSelectedDate)[0])
    }
  },[showQuickView])
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const [allDays,setAllDays] = useState([])
  const [currMonth,setCurrMonth] = useState(3)
  const [currYear,setCurrYear] = useState(2025)
  useEffect(()=>{
    setAllDays(getAllDays(currYear,currMonth))
  },[currMonth,currYear])
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function getAllDays(year, month) {
    let daysInMonth = getDaysInMonth(year, month);
    let firstDay = new Date(year, month - 1, 1).getDay(); // First day of the month (0 = Sunday)
    let lastMonthDays = getDaysInMonth(year, month - 1); // Previous month's total days
    let calendar = [];
    let dayCounter = 1;
    let nextMonthDayCounter = 1;

    for (let row = 0; row < 6; row++) { // 6 rows
        let week = [];
        for (let col = 0; col < 7; col++) { // 7 columns
            if (row === 0 && col < firstDay) {
                // Fill with previous month's dates
                week.push(new Date(year, month - 2, lastMonthDays - firstDay + col + 1));
            } else if (dayCounter > daysInMonth) {
                // Fill with next month's dates
                week.push(new Date(year, month, nextMonthDayCounter++));
            } else {
                // Fill with current month's dates
                week.push(new Date(year, month - 1, dayCounter++));
            }
        }
        calendar.push(week);
    }
    return calendar;
}
  const calenderRef = useRef()
  const goToNextMonth = ()=>{
    if(currMonth<12){
      setCurrMonth(prev=>prev+1)
    }
    else{
      setCurrMonth(1)
      setCurrYear(prev=>prev+1)
    }
  }
  const goToPrevMonth = ()=>{
    if(currMonth>1){
      setCurrMonth(prev=>prev-1)
    }
    else{
      setCurrMonth(12)
      setCurrYear(prev=>prev-1)
    }
  }
  
  return (
    <div className='dashboard-page-div'>
      <div className='dashboard-top-container'>
        <div className='calender-filter-container'>
          <div style={{rotate:"-90deg"}} onClick={goToPrevMonth}>
            <i class="fa-solid fa-caret-up"></i>
          </div>
          <label onClick={()=>{calenderRef.current.showPicker()}}>{months[currMonth-1]} {currYear}</label>
          <div style={{rotate:"90deg"}} onClick={goToNextMonth}>
            <i class="fa-solid fa-caret-up"></i>
          </div>
          <input onChange={(e)=>{
            const [year, month] = e.target.value.split("-");
            console.log(year,month)
            setCurrMonth(parseInt(month))
            setCurrYear(parseInt(year))
          }} type='date' ref={calenderRef} style={{ visibility: "hidden", position: "absolute",transform:"translateY(20px)" }}/>
        </div>
      </div>
      <div className='calender-view'>
        <div className='month-names'>
          {
            days.map((month,i)=>{
              return <div key={i}>{month}</div>
            })
          }
        </div>
        <div className='dates-container'>
          {
            allDays.map((row,index)=>{
              return (<div key={index}>
                  {
                    row.map((date,i)=>{
                      return <div key={i}>
                          <CalenderTile 
                            index={index} 
                            date={date} 
                            events={getEventsOnDay(date)} 
                            changeVis={changeVis} 
                            setCurrentSelectedDate={setCurrentSelectedDate}
                            />
                        </div>
                    })
                  }
                </div>)
            })
          }
        </div>
        <div>
        </div>
      </div>
      {showQuickView && 
      <div className='today-calender-quick-view'>
        <div className='calender-quick-view-banner'>
            <i class="fa-solid fa-calendar-days"></i>
            <label className='common-big-heading' 
            style={{fontSize:"27px"}}>
              {months[currentSelectedDate.getMonth()]} {currentSelectedDate.getDate()}, {currentSelectedDate.getFullYear()}
            </label>
            <div className='close-quick-view' onClick={changeVis}>
              <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        <div className='quick-view-events-container'>
            <div className='quick-view-all-event-container'>
              {
                getEventsOnDay(currentSelectedDate).map((event,i)=>{
                  return <EventCard
                    setCurrentSelectedEvent={setCurrentSelectedEvent}
                    event={event}
                    index={i}
                    dontexpand = {true}
                  />
                })
              }
            </div>
            <div style={{flex:1,height:"70%"}}>
              <QuickEventDisplay event={currentSelectedEvent}/>
            </div>
        </div>
      </div>}
    </div>
  )
}

export default DashBoard
