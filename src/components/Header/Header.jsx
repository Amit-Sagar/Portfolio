import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from "../../assets/amit-profile.jpg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className='.container header_container'>
        <h5>Hello I'm</h5>
        <h1>Amit Sagar</h1>
        <h5 className='text-light'> Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img className='me-child' src={ME} alt = "" />
        </div>
        <a href="#contact" className='scroll_down'>scroll Down</a>
    </div>
    </header>
  )
}

export default Header