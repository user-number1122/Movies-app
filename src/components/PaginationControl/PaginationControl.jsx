import React from 'react';
import { Pagination } from 'antd';
import styles from './PaginationControl.module.scss';

const PaginationControl = ({ activeTab, searchPage, ratedPage, totalRatedPages, onSearchPageChange, onRatedPageChange }) => {
  const handlePageChange = (page) => {
    if (activeTab === '1') {
      onSearchPageChange(page);
    } else if (activeTab === '2') {
      onRatedPageChange(page);
    }
  };
  return <Pagination size="small" current={activeTab === '1' ? searchPage : ratedPage} total={activeTab === '1' ? 5 * 6 : totalRatedPages * 6} pageSize={6} onChange={handlePageChange} className={styles.pagination} />;
};

export default PaginationControl;
