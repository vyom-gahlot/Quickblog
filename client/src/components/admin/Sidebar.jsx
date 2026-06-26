import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-div'>
    <NavLink end={true} to='/admin' className={({isActive})=>`component-container ${isActive ? 'component-active' : ''}`}>
        <img src={assets.home_icon} alt="home" className='component-image' />
        <p className='component-text'>Dashboard</p>
    </NavLink>

    <NavLink end={true} to='/admin/addBlog' className={({isActive})=>`component-container ${isActive ? 'component-active' : ''}`}>
        <img src={assets.add_icon} alt="add blog" className='component-image' />
        <p className='component-text'>Add Blogs</p>
    </NavLink>

    <NavLink end={true} to='/admin/listBlog' className={({isActive})=>`component-container ${isActive ? 'component-active' : ''}`}>
        <img src={assets.list_icon} alt="list blog" className='component-image' />
        <p className='component-text'>Blog List</p>
    </NavLink>

    <NavLink end={true} to='/admin/comments' className={({isActive})=>`component-container ${isActive ? 'component-active' : ''}`}>
        <img src={assets.comment_icon} alt="comments" className='component-image' />
        <p className='component-text'>Comments</p>
    </NavLink>
    </div>
  )
}

export default Sidebar
