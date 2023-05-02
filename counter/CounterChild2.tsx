import * as React from 'react';
import { useCounterDispatchContext } from '../contexts/CounterContext';

export default function CounterChild2() {
  const counterDispatch = useCounterDispatchContext();
  const clickMinusButtonHandler = (num: number) => {
    console.log('minus button ');
    counterDispatch({ type: '-', payload: { step: num } });
  };
  return (
    <div style={{ background: '#123456', padding: '5px' }}>
      Child2
      <button
        onClick={() => {
          clickMinusButtonHandler(1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          clickMinusButtonHandler(5);
        }}
      >
        -5
      </button>
    </div>
  );
}
