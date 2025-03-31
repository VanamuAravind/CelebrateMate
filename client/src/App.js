import './App.css';
import SideBar from './components/SideBar';
import bg from './images/bg.png'
import DashBoard from './Pages/DashBoard';
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <Login/> */}
      <Router>
        <Routes>
          <Route path="/" element={(!localStorage.getItem("user_token"))?<Login />:<MainPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
