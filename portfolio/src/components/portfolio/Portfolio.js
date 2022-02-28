import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

function Portfolio() {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Crypto Currency Dashboard',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Charts templates & inforgraphics in Figma',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-inforgraphics-in-Figma'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Crypto Currency Dashboard',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Charts templates & inforgraphics in Figma',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-inforgraphics-in-Figma'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Figma dashboard UI kit for data design web apps',
      github: 'https://github.com',
      demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn btn-primary'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}


export default Portfolio

// 07571704649  0701889014