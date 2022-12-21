import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <span className='headerTitleSm'>Welcome to our</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src='https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80' />
    </div>
  )
}

export default Header