import React from 'react'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Personal Projects</h2>

      <div className='container portfolio_container'>
      <article className='portfolio_item'> 
        <div className='portfolio_item-image'> 
           <img src={IMG1} alt =""/>
        </div>
        <h3>Netflix-Clone</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/Amit-Sagar/Netflix-clone' className='btn btn-primary'>Github</a>
        <a href="https://netflix-clone-bff70.web.app/" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'> 
        <div className='portfolio_item-image'> 
           <img src={IMG2} alt =""/>
        </div>
        <h3>Cryptoverse</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/Amit-Sagar/cryptoverse' className='btn btn-primary'>Github</a>
        <a href="http://create-cryptoverse.herokuapp.com/" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'> 
        <div className='portfolio_item-image'> 
           <img src={IMG3} alt =""/>
        </div>
        <h3>Pokemon Card</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/Amit-Sagar/pokemon-card' className='btn btn-primary'>Github</a>
        <a href="https://amit-sagar.github.io/pokemon-card/" className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio_item'> 
        <div className='portfolio_item-image'> 
           <img src={IMG6} alt =""/>
        </div>
        <h3>Share me</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/Amit-Sagar/shareme_app' className='btn btn-primary'>Github</a>
        {/* <a href="" className='btn btn-primary'>Live Demo</a> */}
        </div>
        </article>
      
        <article className='portfolio_item'> 
        <div className='portfolio_item-image'> 
           <img src={IMG4} alt =""/>
        </div>
        <h3>TODO list</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/Amit-Sagar/Todo-List' className='btn btn-primary'>Github</a>
        {/* <a href="" className='btn btn-primary'>Live Demo</a> */}
        </div>
        </article>
        <article className='portfolio_item'> 
        <div className='portfolio_item-image'> 
           <img src={IMG5} alt =""/>
        </div>
        <h3>Ristorante Confusion</h3>
        <div className='portfolio_item-cta'>
        <a href='https://github.com/Amit-Sagar/Ristorante-Confusion' className='btn btn-primary'>Github</a>
        {/* <a href="" className='btn btn-primary'>Live Demo</a> */}
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio