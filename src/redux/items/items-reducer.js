import initialState from 'redux/initialState';
import { SET_CONTACTS, ADD, DELETE } from './items-types';

const itemsReducer = (
  state = initialState.contacts.items,
  { type, payload },
) => {
  switch (type) {
    case SET_CONTACTS:
      return [...payload];

    case ADD:
      return [...state, payload];

    case DELETE:
      return payload;

    default:
      return state;
  }
};

export default itemsReducer;
