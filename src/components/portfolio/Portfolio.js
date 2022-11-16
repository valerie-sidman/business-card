import React from 'react';
import './Portfolio.css';
import github from '../../images/iconmonstr-github-39x40.png';
import portfolio from '../../data/portfolio.json';

export default function Portfolio() {
  return (
    <React.Fragment>
      <div id="portfolio" className="section portfolio">
        <h2 className="portfolio-title">Portfolio</h2>
        <ul className="portfolio-list">
          {portfolio.map((project) => {
            return (
              <li className="portfolio-list__item" key={project.id}>
                <div className="portfolio-list__item--text-container">
                  <h3 className="portfolio-list__item--text-title">{project.title}</h3>
                  <div className="portfolio-list__item--text-details">
                    <span className="portfolio-list__item--text-details-description">{project.description} / </span>
                    <span className="portfolio-list__item--text-details-month">{project.month}, </span>
                    <span className="portfolio-list__item--text-details-year">{project.year}</span>
                  </div>
                </div>
                <a rel="noopener noreferrer" href={project.link} target="_blank" className="portfolio-list__item--link-github"  >
                  <img className="portfolio-list__item--icon-github" src={github} alt="Иконка GitHub"/>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </React.Fragment>
  )
}
