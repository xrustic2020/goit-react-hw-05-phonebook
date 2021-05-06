import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import itemsReducer from './items/items-reducer';
import filterReducer from './filter/filter-reducer';

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({ contacts: contactsReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
