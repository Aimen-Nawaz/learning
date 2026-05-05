import React from 'react'
import Profile from './profile/profile';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="logo">SMART</div>

      <Profile />

      <div className="menu">
        <div>Dashboard</div>
        <div>Event Management</div>
        <div>Professor</div>
        <div>Student</div>
        <div>Courses</div>
        <div>Surveys</div>
        <div>Library</div>
        <div>Departments</div>
        <div>Staff</div>
        <div>Holiday</div>
        <div>Charts</div>
        <div>Maps</div>
        <div>Extra pages</div>
        <div>Multiple level</div>
        <div>Widget</div>
        <div>Fees</div>
      </div>

    </div>
  )
}

export default Sidebar