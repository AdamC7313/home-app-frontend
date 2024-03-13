'use client';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  const [selected, setSelected] = React.useState('')

  useEffect(() => {
    const path = window.location.pathname
    if (path.includes('projects')) {
      setSelected('projects')
    } else if (path.includes('appliances')) {
      setSelected('appliances')
    } else {
      setSelected('tasks')
    }
  }, []);

  return (
    <div className='nav-container'>
      <a href='/tasks'><button className={`menu-button ${selected == 'tasks' ? 'selected' : ''}`} href='/calendar'>Tasks</button></a>
      <a href='/projects'><button className={`menu-button ${selected == 'projects' ? 'selected' : ''}`} href='/projects'>Projects</button></a>
      <a href='/appliances'><button className={`menu-button ${selected == 'appliances' ? 'selected' : ''}`} href='/appliances'>Appliances</button></a>
    </div>
    
  )
}

export default NavBar