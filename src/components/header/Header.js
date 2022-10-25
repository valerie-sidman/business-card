import React from 'react';
import Menu from './Menu';
import './Header.css';
import logo from '../../../src/images/logo_50x50.png';

export default function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <img className="logo" src={logo} alt="Логотип" />
        <Menu />
      </div>
    </React.Fragment>
  )
}
