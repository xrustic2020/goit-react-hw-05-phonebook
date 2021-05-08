import { createReducer } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import actions from './items-actions.js';

console.log(actions);

const itemsReducer = createReducer(initialState.contacts.items, {
  // [actions.setContacts]: (_, payload) => [...payload],
  'contacts/add': (state, { payload }) => [...state, payload],
  'contacts/delete': (_, { payload }) => payload,
});

// const itemsReducer = (
//   state = initialState.contacts.items,
//   { type, payload },
// ) => {
//   switch (type) {
//     // case 'contacts/add':
//     //   return [...payload];

//     case 'contacts/add':
//       return [...state, payload];

//     case 'contacts/delete':
//       return payload;

//     default:
//       return state;
//   }
// };

export default itemsReducer;
