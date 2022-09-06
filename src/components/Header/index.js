import './index.css'

import {Component} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

const Header = props => {
  const {iconClicked, iconStatus} = props
  const iconClick = () => {
    iconClicked()
  }
  return (
    <div className="header-bg-container">
      <img
        className="h-img"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
      <button className="icon-btn" type="button" onClick={iconClick}>
        {iconStatus === false ? <GiHamburgerMenu /> : <GrClose />}
      </button>
    </div>
  )
}

export default Header
