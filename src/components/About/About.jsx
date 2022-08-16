import React from 'react';
import './about.css'
import ME from '../../assets/amit-profile.jpg'
import {BsAward,BsFillFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='conatiner about_container'>
         <div className='about_me'> 
           <div className='about_me-image'>
             <img src={ME} alt="" />
            </div>
          </div>

         <div className='about_content'>
           <div className='about_cards'>
             <article className='about_card'>
              <BsAward className='about_icon'/>
               <h5>Experience</h5>
               <small>8 months working</small>
             </article>
             <article className='about_card'>
              <BsFillFolderFill className='about_icon'/>
               <h5>Projects</h5>
               <small>10+ completed Projects</small>
             </article>

             {/* <article className='"about_card'>
              <BsAward className='about_icon'/>
               <h5>Experience</h5>
               <small>7 months working</small>
             </article> */}
           </div>
           <p>
             Hi! I am Amit Sagar.
             I am a web developer seeking roles in an organization where technical skills are useful and I am provided with opportunities to grow.
             I have done my bachelors in Electronics and Communication Engineering. I have excellent knowledge of frontend technologies like HTML,CSS, JavaScript,
             React& Redux etc.And also having 8 months experience as a Software Developer intern at Opensense Labs.
             
           </p>

           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
         </div>
      </div>
    </section>
  )
}

export default About