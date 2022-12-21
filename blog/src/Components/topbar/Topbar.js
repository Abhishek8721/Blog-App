import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
const Topbar = () => {
  return (
    <div className='top'>
        <div className='topleft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className='topcenter'>
            <ul className='topList'>
                <li className='topListItem'>
                  <Link className='link' to="/">Home</Link>
                </li>
                
                <li className='topListItem'>
                <Link className='link' to="/write">Write</Link>
                </li>
                
            </ul>
        </div>
        
       
        
    </div>
    
  )
}

export default Topbar