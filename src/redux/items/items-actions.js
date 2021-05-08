import store from 'redux/store';
import { createAction } from '@reduxjs/toolkit';

// const setContacts = createAction('contacts/setContacts');
const addedContact = createAction('contacts/add');
const deleteContactItem = createAction('contacts/delete', id => {
  console.log('func DEL', id);
  const prevState = store.getState().contacts.items;
  return [...prevState.filter(el => el.id !== id)];
});

// const deleteContactItem = ({ id, name }) => {
//   const prevState = store.getState().contacts.items;
//   toast.success(`Contact "${name}" successfully deleted`);
//   return { type: DELETE, payload: [...prevState.filter(el => el.id !== id)] };
// };

const contactsActions = {
  // setContacts,
  addedContact,
  deleteContactItem,
};

export default contactsActions;
