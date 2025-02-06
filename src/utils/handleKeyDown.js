import { message } from 'antd';

export const handleKeyDown = (searchKeyword, handleSearch) => {
  return (e) => {
    if (e.key === 'Enter') {
      if (!searchKeyword.trim()) {
        message.warning('Введите текст');
        return;
      }
      handleSearch(searchKeyword, 1);
    }
  };
};
