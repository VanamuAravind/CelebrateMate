import React from 'react';
import './SideBar.css';

const SideBar = ({ page, setPage }) => {

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className={(page == "dashboard") ? "selected-item" : "sidebar-item"} onClick={() => { setPage("dashboard") }}>Dashboard</li>
        <li className={(page == "friends") ? "selected-item" : "sidebar-item"} onClick={() => { setPage("friends") }}>Friends</li>
        <li className={(page == "profile") ? "selected-item" : "sidebar-item"} onClick={() => { setPage("profile") }}>Profile</li>
        <li className={(page == "settings") ? "selected-item" : "sidebar-item"} onClick={() => { setPage("settings") }}>Settings</li>
      </ul>
    </div>
  );
};

export default SideBar;