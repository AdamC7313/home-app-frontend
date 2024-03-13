import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeView } from '../../store/slices/tasks';
import './TaskHeader.css';


const TaskHeader = () => {

  const view = useSelector((state) => state.tasks.view)

  const dispatch = useDispatch()

  console.log(view)

  return (
    <div className='task-header-container'>
    <button className={`task-button ${view == 'calendar' ? 'selected' : ''}`} onClick={() => dispatch(changeView('calendar'))}>Calendar</button>
    <button className={`task-button ${view == 'list' ? 'selected' : ''}`} onClick={() => dispatch(changeView('list'))}>List</button>
  </div>
  )
}

export default TaskHeader