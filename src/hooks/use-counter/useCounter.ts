import {useState} from 'react';

type UseCounterProps = {
  initialCount?: number;
};

export const useCounter = ({initialCount = 0}: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return {count, increment, decrement};
};
