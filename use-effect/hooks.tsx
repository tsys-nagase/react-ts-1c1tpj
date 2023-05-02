import { useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);

  const countupHandler = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return [count, countupHandler];
};
