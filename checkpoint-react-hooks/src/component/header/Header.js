import React from 'react'

const Header = ({children}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
        <div className="container">
            <a className="navbar-brand" href="/">MovieApp</a>
            {children}
        </div>
    </nav>
  )
}

export default Header