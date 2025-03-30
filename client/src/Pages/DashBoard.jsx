import React, { useEffect, useReducer, useRef, useState } from 'react'
import './DashBoard.css'
import CalenderTile from '../components/CalenderTile';

// import '../Pages/DashBoard.css'

const DashBoard = () => {
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
                  week.push(lastMonthDays - firstDay + col + 1);
              } else if (dayCounter > daysInMonth) {
                  // Fill with next month's dates
                  week.push(nextMonthDayCounter++);
              } else {
                  // Fill with current month's dates
                  week.push(dayCounter++);
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
    if(currMonth>0){
      setCurrMonth(prev=>prev-1)
    }
    else{
      setCurrMonth(12)
      setCurrYear(prev=>prev-1)
    }
  }
  const dummy_events = [
    {
      name:"vasanth Aids checkup"
    },
    {
      name:"Aravind Birthday"
    }
  ]
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
                          <CalenderTile date={date} events={dummy_events}/>
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
    </div>
  )
}

export default DashBoard
