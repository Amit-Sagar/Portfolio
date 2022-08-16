import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import "./services.css"

const Services = () => {
  return (
    <section id='services'>
         <h5>Wat I Offer</h5>
         <h2>Services</h2>

         <div className='container services_container'>
            <article className='service'>
              <div className='service_head'>
                  <h3>UI/UX Design</h3>
              </div>

              <ul className='service_list'>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
              </ul>
            </article>
            <article className='service'>
              <div className='service_head'>
                  <h3>Web Development</h3>
              </div>

              <ul className='service_list'>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
                <li> 
                <BsCheckCircle className='service_list-icon'/>
                <p>Lorem Ipsum dolor sit amet consectetur elit.</p>
                </li>
              </ul>
            </article>
         </div>
      </section>
  )
}

export default Services