import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
import { ADD_THINGS } from '../../reducers/timeline';
import { CLOSE_NEW_THINGS } from '../../reducers/popup';

import "react-datepicker/dist/react-datepicker.css";
import './Popup.scss';
 
const Popup = () =>
 {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.popup)
  const [date, setDate] = useState(dayjs().valueOf())
  const [title, setTitle] = useState('')

  const onClose = () => {
    setTitle('')
    dispatch({
      type: CLOSE_NEW_THINGS,
    });
  }
  const handleCloseClick = () => {
    onClose()
  }

  const handleAddClick = () => {
    dispatch({
      type: ADD_THINGS,
      payload: { date, title },
    });
    onClose()
  }

  const handleChangeDate = date => setDate(date)

  const handleChangeTitle = e => {
    const { target: { value } = {} } = e
    setTitle(value)
  }

  if(!isOpen) {
    return null;
  }
  return (
    <div className="add-popup" >
      <div 
        className="wrapper" 
        role="button"
        onClick={handleCloseClick}
      />
      <div className="modal">
        <div className="header">
          <div className="title">
            新增事情
          </div>
          <div 
            role="button"
            className="close-button"
            onClick={handleCloseClick}
          >
            +
          </div>
        </div>
        <div className="content">
          <div className="row">
            <div className="label">
              日期
            </div>
            <div className="date">
              <DatePicker 
                className="input"
                dateFormat="yyyy-MM-dd"
                selected={date} 
                onChange={handleChangeDate} 
              />
            </div>
          </div>
          <div className="row">
            <div className="label">
              標題
            </div>
            <input 
              className="input"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>
          {/* <div className="row">
            <div className="label">
              內容
            </div>
            <input className="input" />
          </div> */}
        </div>
        <div className="footer">
          <div 
            className="button" 
            role="button"
            disabled={!title}
            onClick={handleAddClick}
          >
            紀錄
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;
