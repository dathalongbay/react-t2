import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Khi trang tải lên, ta muốn lấy dữ liệu từ localStorage (nếu có) và thiết lập giá trị ban đầu cho state.
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Sử dụng useEffect để theo dõi sự thay đổi của giá trị và lưu nó vào localStorage khi nó thay đổi.
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
