import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './items/items-reducer';
import filterReducer from './filter/filter-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: { contacts: contactsReducer },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
