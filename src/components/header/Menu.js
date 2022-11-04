// noinspection HtmlUnknownAnchorTarget

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuButton from "./MenuButton";
import './Menu.css';
import { changeTypeMenuButton } from '../../actions/actionCreators';

export default function Menu() {
  const { type } = useSelector(state => state.serviceMenuButtonState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.currentTarget.parentElement.classList.contains("menu-list__mobile--active")) {
      dispatch(changeTypeMenuButton());
    }
  }
  return (
    <React.Fragment>
      <MenuButton />
      <ul className={type === 'dots' ? "menu-list menu-list__mobile--inactive" : "menu-list menu-list__mobile--active"}>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Home</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a href="#about-anchor">About</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a href="#skills-anchor">Skills and tools</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a href="#portfolio-anchor">Portfolio</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a href="#contacts-anchor">Contacts</a>
        </li>
      </ul>
    </React.Fragment>
  )
}
