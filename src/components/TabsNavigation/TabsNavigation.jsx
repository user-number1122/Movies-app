import React from 'react';
import { Tabs } from 'antd';
import styles from './TabsNavigation.module.scss';
const TabsNavigation = ({ activeTab, onTabChange }) => {
  return (
    <Tabs
      defaultActiveKey={activeTab}
      onChange={onTabChange}
      className={styles.navigation}
      items={[
        { label: 'Search', key: '1' },
        { label: 'Rated', key: '2' },
      ]}
    />
  );
};
export default TabsNavigation;
