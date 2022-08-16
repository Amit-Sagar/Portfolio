import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/amit-sagar-1a222418b/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/Amit-Sagar' target="_blank"><BsGithub/></a>
        <a href='https://Instagram.com' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials