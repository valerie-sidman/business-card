// noinspection HtmlUnknownAnchorTarget

import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuButton from "./MenuButton";
import './Menu.css';
import { changeTypeMenuButton, handleMenuItemState } from '../../actions/actionCreators';

export default function Menu() {
  const { type } = useSelector(state => state.serviceMenuButtonState);
  const { name } = useSelector(state => state.serviceMenuItemState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.currentTarget.parentElement.classList.contains("menu-list__mobile--active")) {
      dispatch(changeTypeMenuButton());
    }
  }
  const changeColor = (menuItem) => {
    dispatch(handleMenuItemState(menuItem));
  }
  useEffect(() => {
    dispatch(handleMenuItemState("#"));
  }, [dispatch])
  return (
    <React.Fragment>
      <MenuButton />
      <ul className={type === 'dots' ? "menu-list menu-list__mobile--inactive" : "menu-list menu-list__mobile--active"}>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={name === "#" ? "menu-list__item--active" : "menu-list__item--inactive"} href="#" onClick={() => changeColor("#")}>Home</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a className={name === "#about-anchor" ? "menu-list__item--active" : "menu-list__item--inactive"} href="#about-anchor" onClick={() => changeColor("#about-anchor")}>About</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a className={name === "#skills-anchor" ? "menu-list__item--active" : "menu-list__item--inactive"} href="#skills-anchor" onClick={() => changeColor("#skills-anchor")}>Skills and tools</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a className={name === "#portfolio-anchor" ? "menu-list__item--active" : "menu-list__item--inactive"} href="#portfolio-anchor" onClick={() => changeColor("#portfolio-anchor")}>Portfolio</a>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <a className={name === "#contacts-anchor" ? "menu-list__item--active" : "menu-list__item--inactive"} href="#contacts-anchor" onClick={() => changeColor("#contacts-anchor")}>Contacts</a>
        </li>
      </ul>
    </React.Fragment>
  )
}
