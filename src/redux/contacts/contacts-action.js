import { toast } from 'react-toastify';
import { SET_CONTACTS, ADD, DELETE } from './contacts-types';
import store from 'redux/store';

const setContacts = contacts => {
  return { type: SET_CONTACTS, payload: contacts };
};

const addedContact = newContact => {
  return { type: ADD, payload: newContact };
};

const deleteContactItem = ({ id, name }) => {
  const prevState = store.getState().items;
  toast.success(`Contact "${name}" successfully deleted`);
  return { type: DELETE, payload: [...prevState.filter(el => el.id !== id)] };
};

const contactsActions = {
  setContacts,
  addedContact,
  deleteContactItem,
};

export default contactsActions;
