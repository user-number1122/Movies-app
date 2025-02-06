import React from 'react';
import { Input } from 'antd';
import styles from './SearchInput.module.scss';
const SearchInput = ({ searchKeyword, onInputChange, onKeyDown }) => {
  return <Input allowClear placeholder="Type to search..." onChange={onInputChange} onKeyDown={onKeyDown} value={searchKeyword} className={styles.movieInput} />;
};
export default SearchInput;
