import initialState from 'redux/initialState';
import { SET_FILTER, RESET } from './filter-types';

const filterReducer = (
  state = initialState.contacts.filter,
  { type, payload },
) => {
  switch (type) {
    case SET_FILTER:
      return payload;

    case RESET:
      return payload;

    default:
      return state;
  }
};

export default filterReducer;
