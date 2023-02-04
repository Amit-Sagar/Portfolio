import React, { useRef } from 'react';
import {MdOutlineDrafts} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kuhzjeh', 'template_ykm1pod', form.current, 'FSHOxlLPaLETj6S4P')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
     <h2>Contact Me</h2>

     <div className='container contact_container'>
       <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineDrafts/>
            <h4>Email</h4>
            <h5>s.amitsagar99@gmail.com</h5>
            <a href="mailto:s.amitsagar99@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+91 7551188506</h5>
            <a href="https://api.whatsapp.com/send?phone+91-7551188506">Send a message</a>
          </article> 
       </div>
       <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea  name='message' row="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
     </div>
    </section >
  )
}

export default Contact