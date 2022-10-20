import React from 'react';
import { useSelector  } from 'react-redux';
import MenuButton from "./MenuButton";
import './Menu.css';

export default function Menu() {
  const { type } = useSelector(state => state.serviceMenuButtonState);

  return (
    <React.Fragment>
      <MenuButton />
      <ul className={type === 'dots' ? "menu-list menu-list__mobile--inactive" : "menu-list menu-list__mobile--active"}>
        <li className="menu-list__item menu-list__item--mobile">Home</li>
        <li className="menu-list__item menu-list__item--mobile">About</li>
        <li className="menu-list__item menu-list__item--mobile">Skills and tools</li>
        <li className="menu-list__item menu-list__item--mobile">Portfolio</li>
        <li className="menu-list__item menu-list__item--mobile">Contacts</li>
      </ul>
    </React.Fragment>
  )
}
