import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
  const user = useSelector(selectUser)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    ) 
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://media.istockphoto.com/id/1370678625/photo/neon-rainbow-watercolor-banner-background-on-black-pure-neon-watercolor-colors-creative-paint.jpg?s=2048x2048&w=is&k=20&c=p6uktJXEMviCPLk4-yKtUotlDxd8TToIGZO1wx7LA4g=" alt="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,443</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
