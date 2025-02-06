import { debounce } from 'lodash';
export const createDebouncedSearch = (callback, delay = 600) => {
  return debounce(callback, delay);
};
