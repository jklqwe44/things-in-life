import React from "react";
import { useDispatch } from 'react-redux';
import { OPEN_NEW_THINGS } from '../../reducers/popup';
import './AddButton.scss';

const AddButton = () =>
 {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: OPEN_NEW_THINGS,
      payload: { },
    });
  } 
  return (
    <div 
      className="add-button"
      role="button"
      onClick={handleClick}
    >
      <div className="plus">
        +
      </div>
    </div>
  )
}

export default AddButton;
