import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo"></div>
        <button className="menu-button">
          <img 
            className="menu-button__icon" 
            src={require('../../../src/images/icon_dots_8x30.png')} 
            alt="Menu icon" 
          />
        </button>
        <ul className="menu-list">
          <li className="menu-list__item">Home</li>
          <li className="menu-list__item">About</li>
          <li className="menu-list__item">Skills and tools</li>
          <li className="menu-list__item">Portfolio</li>
          <li className="menu-list__item">Contacts</li>
        </ul>
      </div>
    </React.Fragment>
  )
}
