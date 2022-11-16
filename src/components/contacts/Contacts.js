import React from 'react';
import './Contacts.css';
import contacts from '../../data/contacts.json';

export default function Contacts() {
  return (
    <React.Fragment>
      <div id="contacts" className="section contacts">
        <h2 className="contacts-title">Contacts</h2>
        <div className="contacts-container">
          <div className="contacts-text__information">
            <p className="contacts-text__information--ways">Связаться со мной можно любым удобным для вас способом:
              электронная почта, телефон или telegram.</p>
            <span className="contacts-text__information--time">Доступна с понедельника по пятницу, с 08:00 до 17:00 по МСК</span>
          </div>
          <ul className="contacts-text__list-details">
            {contacts.map((item) => {
              return (
                <li className="contacts-text__list-details-item" key={item.id}>
                  <span className="contacts-text__list-details-item__title">{item.title}</span>
                  <span className="contacts-text__list-details-item__info">{item.info}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
