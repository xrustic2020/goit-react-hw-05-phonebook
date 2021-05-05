import { toast } from 'react-toastify';
import { SET_FILTER, RESET } from './filter-types';

const setFilter = value => {
  return { type: SET_FILTER, payload: value };
};

const resetFilter = () => {
  toast.success('Filter cleaned successfully');
  return { type: RESET, payload: '' };
};

const filterActions = {
  setFilter,
  resetFilter,
};

export default filterActions;
