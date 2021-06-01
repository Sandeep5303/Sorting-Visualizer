import { SET_ARRAY, SET_ARRAY_SIZE, SET_SORTING_SPEED } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SET_ARRAY:
      return {
        ...state,
        array: action.payload,
      };
    case SET_ARRAY_SIZE:
      return {
        ...state,
        size: action.payload,
      };
    case SET_SORTING_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    default:
      return state;
  }
};
