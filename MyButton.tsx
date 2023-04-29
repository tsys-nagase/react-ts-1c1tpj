import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function MyButton({ value }: { value: string }) {
  //console.log('🦠', value);
  let [count, setCount] = useState(0);

  const countUpHandler = () => {
    console.log("countup")
    setCount((prev) => prev+1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={countUpHandler}>ボタンです{value}</button>
    </div>
  );
}
