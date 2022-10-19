import React from 'react';
import MenuButton from "./MenuButton";
import './Menu.css';

export default function Menu() {
  return (
    <React.Fragment>
      <MenuButton />
      <ul className="menu-list">
        <li className="menu-list__item">Home</li>
        <li className="menu-list__item">About</li>
        <li className="menu-list__item">Skills and tools</li>
        <li className="menu-list__item">Portfolio</li>
        <li className="menu-list__item">Contacts</li>
      </ul>
    </React.Fragment>
  )
}
