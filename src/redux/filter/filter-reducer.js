import initialState from 'redux/initialState';
import { SET_FILTER, RESET } from './filter-types';

const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, filter: payload };

    case RESET:
      return { ...state, filter: payload };

    default:
      return state;
  }
};

export default filterReducer;
