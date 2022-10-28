import React from 'react';
import './About.css';
import photo from "../../images/future_photo_500x500.png";

export default function About() {
  return (
    <React.Fragment>
      <div className="about">
        <img className="photo" src={photo} alt="Фотография" />
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">About</h2>
            <p className="about-text about-text__first-paragraf">По образованию я специалист по рекламе. Сразу после института решила пройти стажировку в рекламном агентстве и поняла, что это совершенно не моё.</p>
            <p className="about-text about-text__subsequent-paragraf">Во время учебы в институте я работала в офисе и была хорошо знакома с делопроизводством. Поэтому, после неудачной стажировки я приняла решение вернуться в эту область. Большая часть работы заключалась в ведении документаоборота и общениис клиентами. Но чувство, что я не на своём месте и способна на большее подтолкнуло меня на кардинальную смену профессии.</p>
            <p className="about-text about-text__subsequent-paragraf">Тема разработки меня привлекла больше всех, несмотря на то, что с ней я была знакома посредственно. И вот уже с первого занятия я влюбилась в эту профессию. Я ещё никогда и нигде не ощущала результаты своей работы так ярко, и в таком масштабе. Но больше всего я люблю и ценю разработку за то, что в ней я наконец-то нашла то “рабочее” творчество, которого мне так не хватало в прошлой отрасли. То сколько способов и подходов может существовать у решения одной задачи, возможность проявить свою индивидуальность и педантичность как в архитектуре проекта, так и в “опрятности” написания самого кода, работа с макетами – всё это приводит меня в восторг и доставляет мне то самое удовольствие от работы, которое я искала.</p>
          </div>
          <div className="resume-button-container">
            <button className="resume-button">Скачать резюме</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
