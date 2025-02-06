// src/components/Loader.js
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Loader;
