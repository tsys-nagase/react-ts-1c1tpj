import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function MyButton({ value }: { value: string }) {
  //console.log('🦠', value);
  const [count, setCount] = useState(0);
  const [rCount, dispatch] = React.useReducer((prev, action) => {
    if (action === '+') {
      prev = prev + 1;
    } else if (action === '-') {
      prev = prev - 1;
    }
    return prev;
  }, 0);
  const countUpHandler = () => {
    console.log('countup');
    setCount((prev) => prev + 1);
  };
  const countUp = () => {
    console.log('rHandler');
    dispatch('+');
  };
  const countDown = () => {
    dispatch('-');
  };

  return (
    <div>
      <div>state:{count}</div>

      <button onClick={countUpHandler}>ボタンです{value}</button>

      <div>reducer:{rCount}</div>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  );
}
