import React from "react";
import dayjs from "dayjs";
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_THINGS } from '../../reducers/timeline';
import './Timeline.scss';

const Timeline = () =>
 {
  const dispatch = useDispatch();
  const { filterList } = useSelector(state => state.timeline)

  const handleDeleteClick = ({title, date}) => () => {
    dispatch({
      type: DELETE_THINGS,
      payload: { title, date },
    });
  }

  if(!filterList || filterList.length === 0) {
    return (
      <div className="timeline">
        <div className="item">
          沒有資料
        </div>
      </div>
    )
  }

  return (
    <div className="timeline">
      {filterList.map((item, index) => {
        const { title, date } = item
        return (
        <div className="item" key={`things-${index}-${title}`}>
          <div className="date">
            {`${dayjs(date).format('YYYY-MM-DD')}`}
          </div>
          <div className="line" />
          <div className="title">
            {title}
          </div>
          <div 
            role="button"
            className="delete-button"
            onClick={handleDeleteClick({ title, date })}
          >
            +
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Timeline;
