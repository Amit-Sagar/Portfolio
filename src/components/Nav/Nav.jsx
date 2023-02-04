import React,{useState} from 'react'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineContacts} from 'react-icons/ai'
import './nav.css'

const Nav = () => {
  const [activeNav,setActiveNav]= useState('#')
  return (
   <nav>
     <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#'? "active": ''}><AiOutlineHome/></a>
     <a href="#about" onClick={()=>setActiveNav('about')} className={activeNav === 'about'? "active": ''}><AiOutlineUser/></a>
     <a href="#experience" onClick={()=>setActiveNav('experience')} className={activeNav === 'experience'? "active": ''}><AiOutlineBook/></a>
     <a href="#contact" onClick={()=>setActiveNav('contact')} className={activeNav === 'contact'? "active": ''}><AiOutlineContacts/></a>

   </nav>
  )
}

export default Nav