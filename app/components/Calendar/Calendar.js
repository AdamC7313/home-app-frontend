import React from 'react'
import './calendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
  return (
    <div className='calendar-container'>
    <FullCalendar 
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      />
      </div>
  )
}

export default Calendar