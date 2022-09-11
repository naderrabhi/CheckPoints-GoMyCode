import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = ({title,children}) => {
  return (
    <div className='movies--header fixed-top'>
        <h4>{title}</h4>
        <nav className='movies--nav' >
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/newmovies">NewMovie</NavLink></li>
            </ul>
        </nav>
        {children}
    </div>
  )
}

export default Header