import initialState from 'redux/initialState';
import { SET_CONTACTS, ADD, DELETE } from './contacts-types';

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CONTACTS:
      return { ...state, items: payload };

    case ADD:
      return { ...state, items: [...state.items, payload] };

    case DELETE:
      return { ...state, items: payload };

    default:
      return state;
  }
};

export default contactsReducer;
