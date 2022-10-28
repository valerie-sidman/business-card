import React from 'react';
import './Skills.css';
import arrow from '../../images/arrow_8x11.png';
import certificates from '../../data/certificates.json';

export default function Skills() {
  console.log(certificates);
  return (
    <React.Fragment>
      <div className="skills">
        <h2 className="skills-title">Skills and tools</h2>
        <div className="skills-container">
          <button className="skills-button__back">
            <img className="skills-image__arrow--back" src={arrow} alt="Иконка стрелочки назад" />
          </button>
          <ul className="skills-list">
            {/* {.map( =>
              <li className="" key={}>
                <a className="" href="/#"></a>
              </li>
            )} */}
          </ul>
          <button className="skills-button__forth">
            <img className="skills-image__arrow--forth" src={arrow} alt="Иконка стрелочки вперед" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
