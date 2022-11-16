// noinspection HtmlUnknownAnchorTarget

import React, {useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuButton from "./MenuButton";
import './Menu.css';
import { changeTypeMenuButton, handleMenuItemState, checkingClickOnMenu } from '../../actions/actionCreators';

export default function Menu() {
  let scrollTimeout;
  const { type } = useSelector(state => state.serviceMenuButtonState);
  const { name, clicked } = useSelector(state => state.serviceMenuItemState);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.currentTarget.parentElement.classList.contains("menu-list__mobile--active")) {
      dispatch(changeTypeMenuButton());
    }
  }
  const selectSection = (menuItem) => {
    dispatch(checkingClickOnMenu(true));
    dispatch(handleMenuItemState(menuItem));
  }

  const handleScrolling = useCallback(() => {
    clearTimeout(scrollTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    scrollTimeout = setTimeout(function() {
      dispatch(checkingClickOnMenu(false));
    }, 50);
    if (!clicked) {
      const sections = document.querySelectorAll('.section');
      let current = '';
      for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= 0 && window.scrollY <= 200) {
          current = "home";
          break;
        }
        if (window.scrollY >= (sectionTop - sectionHeight)) {
          current = section.getAttribute('id');
        }
      }
      dispatch(handleMenuItemState(current));
    }
  }, [clicked]);

  useEffect(() => {
    const yOffset = -130;
    const element = document.getElementById(name);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
    window.addEventListener('scroll', handleScrolling)
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, [dispatch, name, clicked, handleScrolling])

  return (
    <React.Fragment>
      <MenuButton />
      <ul className=  {type === 'dots' ? "menu-list menu-list__mobile--inactive" : "menu-list menu-list__mobile--active"}>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <span className={name === "home" ? "menu-list__item-text menu-list__item--active" : "menu-list__item-text menu-list__item--inactive"} onClick={() => selectSection("home")}>Home</span>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <span className={name === "about" ? "menu-list__item-text menu-list__item--active" : "menu-list__item-text menu-list__item--inactive"} onClick={() => selectSection("about")}>About</span>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <span className={name === "skills" ? "menu-list__item-text menu-list__item--active" : "menu-list__item-text menu-list__item--inactive"} onClick={() => selectSection("skills")}>Skills and tools</span>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <span className={name === "portfolio" ? "menu-list__item-text menu-list__item--active" : "menu-list__item-text menu-list__item--inactive"} onClick={() => selectSection("portfolio")}>Portfolio</span>
        </li>
        <li className="menu-list__item menu-list__item--mobile" onClick={handleChange}>
          <span className={name === "contacts" ? "menu-list__item-text menu-list__item--active" : "menu-list__item-text menu-list__item--inactive"} onClick={() => selectSection("contacts")}>Contacts</span>
        </li>
      </ul>
    </React.Fragment>
  )
}
