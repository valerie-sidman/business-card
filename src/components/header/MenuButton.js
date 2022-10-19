import React from 'react';
import './MenuButton.css';
import dotsMenuIcon from '../../../src/images/icon_dots_8x30.png';
import crossMenuIcon from '../../../src/images/icon_close_30x30.png';

export default function MenuButton() {
  return (
    <React.Fragment>
      <button className="menu-button">
        <img
          className="menu-button__icon--dots"
          src={dotsMenuIcon}
          alt="Menu icon dots"
        />
      </button>
    </React.Fragment>
  )
}