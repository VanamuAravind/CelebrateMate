import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import DashBoard from './DashBoard'
import Profile from './Profile'
import Friends from './Friends'
import Settings from './Settings'

const MainPage = () => {
    const [page, setPage] = useState('dashboard')
    return (
        <div>
            <div className='side-bar'>
                <SideBar page={page} setPage={setPage} />
            </div>
            <div className='main-page'>
                <div className='page-selector'>
                    {(page === "dashboard" ? <div><DashBoard /></div> : null)}
                    {(page === "friends" ? <div><Profile /></div> : null)}
                    {(page === "settings" ? <div><Settings /></div> : null)}
                    {(page === "profile" ? <div><Friends /></div> : null)}
                </div>
            </div>
        </div>
    )
}

export default MainPage
