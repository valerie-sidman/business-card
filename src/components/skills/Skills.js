import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './Skills.css';
import arrow from '../../images/arrow_8x11.png';
import {scrollingSkillListItems, addSkillItemId, trackingWindowWidth} from '../../actions/actionCreators';
import certificates from '../../data/certificates.json';

export default function Skills() {
  const {windowWidth, skillsIdList, start, end, left} = useSelector(state => state.serviceSkillsState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackingWindowWidth(window.innerWidth));
    window.addEventListener('resize', () => dispatch(trackingWindowWidth(window.innerWidth)));

    let certificatesForShow;

    if (window.innerWidth >= 1600) {
      certificatesForShow = certificates.slice(0, 4);
    } else if (window.innerWidth >= 1024 && window.innerWidth <= 1599) {
      certificatesForShow = certificates.slice(0, 3);
    } else if (window.innerWidth >= 650 && window.innerWidth <= 1023) {
      certificatesForShow = certificates.slice(0, 2);
    } else if (window.innerWidth <= 649) {
      certificatesForShow = certificates.slice(0, 1);
    }

    if (certificatesForShow.length !== skillsIdList.length) {
      dispatch(addSkillItemId(certificatesForShow.map((certificate) => certificate.id)));
    }

  }, [dispatch, windowWidth, skillsIdList, start, end, left]);

  const handleScrollBack = () => {
    dispatch(scrollingSkillListItems("back"));
  }
  const handleScrollForth = () => {
    dispatch(scrollingSkillListItems("forth"));
  }

  return (
    <React.Fragment>
      <div className="skills">
        <h2 className="skills-title">Skills and tools</h2>
        <div className="skills-container">
          <button className="skills-button__back" onClick={handleScrollBack}>
            <img className={start ? "skills-image__arrow--back disable" : "skills-image__arrow--back"} src={arrow}
                 alt="Иконка стрелочки назад"/>
          </button>
          <ul className="skills-list">
            {skillsIdList.map((skillId) => {
                const foundCertificate = certificates.find((certificate) => certificate.id === skillId);
                return (<li className="skills-list__item" key={foundCertificate.id}>
                  <a className="skills-list__item-link" href={foundCertificate.link}>{foundCertificate.title}</a>
                </li>)
              }
            )}
          </ul>
          <button className="skills-button__forth" onClick={handleScrollForth}>
            <img className={end ? "skills-image__arrow--forth disable" : "skills-image__arrow--forth"} src={arrow}
                 alt="Иконка стрелочки вперед"/>
          </button>
        </div>
        <div className="skills-progress-bar-container">
          <div
            className="skills-progress-bar-content"
            style={
            {
              width: Math.round(skillsIdList.length * 100 / certificates.length) + "%",
              left: left + "%"
            }}>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
