import React from "react";
import "./about.css";
import ME from "../../assets/amit-profile.jpg";
import { BsAward, BsFillFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="conatiner about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsAward className="about_icon" />
              <h5>Experience</h5>
              <small> 2.5 year+ working</small>
            </article>
            <article className="about_card">
              <BsFillFolderFill className="about_icon" />
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
            I’m Amit Sagar, a passionate Full Stack Engineer with over 2.5+ years
            of experience building high-performance, scalable applications. I
            specialize in React, Next.js, Node.js, and TypeScript, and I have a
            strong focus on delivering clean, maintainable code. My journey has
            allowed me to work on diverse projects, from scaling Restoration
            Hardware’s platform to creating web3 gaming solutions. I’m driven by
            innovation and continuously strive to stay ahead of the latest tech
            trends. I love solving complex problems and mentoring teams to
            achieve remarkable results.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
