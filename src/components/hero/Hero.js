import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <React.Fragment>
      <div className="hero hero__portret-orientation--mobile hero__portret-orientation--tablet">
        <h1 className="hero-title">Валерия Сидорова</h1>
        <div className="hero-content">
          <p className="hero-description">Junior frontend-разработчик. Свое призвание нашла в Нетологии. Рассматриваю вакансии с возможностью удаленной работы.</p>
          <div id="about-anchor" className="hero-details">
            <span className="hero-age">29 лет</span>
            <span className="hero-city">Москва</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
