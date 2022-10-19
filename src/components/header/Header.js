import React from 'react';
import Menu from "./Menu";
import './Header.css';

export default function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="logo"></div>
        <Menu />
      </div>
    </React.Fragment>
  )
}
