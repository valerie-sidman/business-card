import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import './Skills.css';
import arrow from '../../images/arrow_8x11.png';
import { scrollingSkillListItems, trackingWindowWidth } from '../../actions/actionCreators';
import certificates from '../../data/certificates.json';

export default function Skills() {
  const { windowWidth, skillsIdList, start, end } = useSelector(state => state.serviceSkillsState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackingWindowWidth(window.innerWidth));
    window.addEventListener('resize', () => dispatch(trackingWindowWidth(window.innerWidth)));
  }, [dispatch]);


  const handleScrollBack = () => {
    dispatch(scrollingSkillListItems("back"));
  }
  const handleScrollForth = () => {
    dispatch(scrollingSkillListItems("forth"));
  }
  // console.log(certificates);

  return (
    <React.Fragment>
      <div className="skills">
        <h2 className="skills-title">Skills and tools</h2>
        <div className="skills-container">
          <button className="skills-button__back" onClick={handleScrollBack}>
            <img className="skills-image__arrow--back" src={arrow} alt="Иконка стрелочки назад" />
          </button>
          <ul className="skills-list">
            {/* {.map( =>
              <li className="" key={}>
                <a className="" href="/#"></a>
              </li>
            )} */}
          </ul>
          <button className="skills-button__forth" onClick={handleScrollForth}>
            <img className="skills-image__arrow--forth" src={arrow} alt="Иконка стрелочки вперед" />
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
