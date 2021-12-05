import React from 'react'
import "./NavBar.css"
const NavBar = () => {
    return (
        <div classname="navbar-container">
  <input type="checkbox" id="ham-menu" />
  <label htmlFor="ham-menu">
    <div className="hide-des">
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
      <span className="menu-line" />
    </div>
  </label>
  <div className="full-page-green" />
  <div className="ham-menu">
    <ul className="centre-text bold-text">
      <li>Home</li>
      <li>Categories</li>
      <li>Shop</li>
      <li>Support</li>
      <li>Contact us</li>
    </ul>
  </div>
</div>
    )
}

export default NavBar
