import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import './MenuButton.css';
import { changeTypeMenuButton } from '../../actions/actionCreators';

export default function MenuButton() {
  const { name, src, alt } = useSelector(state => state.serviceMenuButtonState);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(changeTypeMenuButton());
  }
  return (
    <React.Fragment>
      <button className="menu-button" onClick={handleChange}>
        <img className={name} src={src} alt={alt} />
      </button>
    </React.Fragment>
  )
}