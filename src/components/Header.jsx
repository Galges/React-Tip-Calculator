import React from 'react'
import logo from '../images/logo.svg'
import './Header.css'

function Header() {
  return (
    <div className='header-logo'>
				<img src={logo} alt=''></img>
			</div>
  )
}

export default Header