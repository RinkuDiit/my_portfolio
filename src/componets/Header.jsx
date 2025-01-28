import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="header_logo">
        <div className="logo">
          <img src={require('../img/gold-golden-r-wing-wings-alphabet-letter-logo-icon-with-classy-design-for-company-and-business-vector.jpg')}/>
        </div>
        <div className="header_menu">
          <ul>
            <Link to="/"></Link><li><>Home</></li>
            <li><>About</></li>
            <li><>Contect</></li>
            <li>My CV</li>
            <li>Projects</li>

          </ul>
        </div>
        <div className="nav_icon">
          
        </div>
      </div>
    </div>
  )
}

export default Header