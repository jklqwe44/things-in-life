
export const OPEN_NEW_THINGS = 'OPEN_NEW_THINGS';
export const CLOSE_NEW_THINGS = 'CLOSE_NEW_THINGS';

const initState = {
  isOpen: false,
};

export default (state = initState, action) => {
  const { type } = action
  switch (type) {
    case OPEN_NEW_THINGS: {
      return {
        isOpen: true,
      };
    }
    case CLOSE_NEW_THINGS: {
      return {
        isOpen: false,
      };
    }
    default:
      return state;
  }
};