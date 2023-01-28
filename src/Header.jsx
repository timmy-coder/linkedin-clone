import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import HeaderOption from './HeaderOption'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        <div className="header__search">
          <SearchIcon/>
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" title='me'/>
      </div>
    </div>
  )
}

export default Header
