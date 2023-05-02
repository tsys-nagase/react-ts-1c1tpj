import * as React from 'react';
import { useCounterDispatchContext } from '../contexts/CounterContext';
export default function CounterChild1() {
  const counterDispatch = useCounterDispatchContext();
  const ClickPlusButtonHandler = (num: number) => {
    console.log('plus', num);
    counterDispatch({ type: '+', payload: { step: num } });
  };
  return (
    <div style={{ background: '#123456', padding: '5px' }}>
      Child1
      <button onClick={() => ClickPlusButtonHandler(1)}>+1</button>
      <button onClick={() => ClickPlusButtonHandler(5)}>+5</button>
    </div>
  );
}
