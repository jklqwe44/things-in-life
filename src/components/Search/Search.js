import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import { SEARCH_THINGS } from '../../reducers/timeline';
import './Search.scss';

const Search = () =>
 {  
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('')

  const handleSearchClick = () => {
    dispatch({
      type: SEARCH_THINGS,
      payload: { searchKey },
    });
  }

  const handleCancelClick = () => {
    setSearchKey('')
    dispatch({
      type: SEARCH_THINGS,
      payload: { searchKey: '' },
    });
  }

  const handleChangeSearchKey = e => {
    const { target: { value } = {} } = e
    setSearchKey(value)
  }

  return (
    <div className="search">
      <div className="content">
        <div className="title">
          生活大小事
        </div>
        <input 
          className="input" 
          value={searchKey}
          onChange={handleChangeSearchKey}
        />
        {!!searchKey && (
          <div 
            role="button"
            className="cancel-button"
            onClick={handleCancelClick}
          >
            +
          </div>
        )}
        <div 
          className="button" 
          role="button"
          onClick={handleSearchClick}
        >
          搜尋
        </div>
      </div>
    </div>
  )
}

export default Search;
