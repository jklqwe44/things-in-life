import dayjs from "dayjs";

export const ADD_THINGS = 'ADD_THINGS';
export const DELETE_THINGS = 'DELETE_THINGS';
export const SEARCH_THINGS = 'SEARCH_THINGS';

const EXAMPLE_LIST = [{
  title: '開發範例',
  date: dayjs('2020-9-19'),
},{
  title: '游泳一公里',
  date: dayjs('2020-7-20'),
},{
  title: '爬玉山',
  date: dayjs('2020-06-23'),
},{
  title: '路上撿到錢',
  date: dayjs('2020-5-12'),
}]

const initState = {
  list: EXAMPLE_LIST,
  filterList: EXAMPLE_LIST,
  searchKey: '',
};

export default (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_THINGS: {
      const { list, searchKey } = state
      const newList = list.concat(payload)
        .sort((a, b) => 
          dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
        )
      const newFilterList = newList.filter(item => 
          item.title.includes(searchKey)
        )
      return {
        ...state,
        list: newList,
        filterList: newFilterList
      };
    }
    case DELETE_THINGS: {
      const { list, searchKey } = state
      const { title: deleteTitle, date: deleteDate } = payload
      const newList = list.filter(item => 
        item.title !== deleteTitle || item.date !== deleteDate)
      const newFilterList = newList.filter(item => 
          item.title.includes(searchKey)
        )
      return {
        ...state,
        list: newList,
        filterList: newFilterList
      };
    }
    case SEARCH_THINGS: {
      const { list } = state
      const { searchKey } = payload
      const newFilterList = list.filter(item => 
          item.title.includes(searchKey)
        )
      return {
        ...state,
        filterList: newFilterList,
        searchKey
      };
    }
    default:
      return state;
  }
};