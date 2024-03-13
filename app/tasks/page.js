'use client';
import React from 'react'
import Calendar from '../components/Calendar/Calendar';
import TaskHeader from '../components/TaskHeader/TaskHeader';
import { useSelector, useDispatch } from 'react-redux';
import './tasks.css';

const Tasks = () => {

  const view = useSelector((state) => state.tasks.view)


  return (
    <div className='tasks-container'>
      <div>
        <h1>Maintenance Tasks</h1>
        <TaskHeader />
      </div>
      {view == 'calendar' && <Calendar />}
    </div>
  )
}

export default Tasks;