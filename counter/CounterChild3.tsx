import * as React from 'react';
import {
  useCounterContext,
  useCounterDispatchContext,
} from '../contexts/CounterContext';
export default function CounterChild3() {
  const counter = useCounterContext();
  const counterDispatch = useCounterDispatchContext();

  const onChangeHandler = (e: any) => {
    console.log('onchange');
    counterDispatch({ type: 'setname', payload: { step: 0, val1: e.target.value } });
  };

  return (
    <div style={{ background: '#ff34fa', padding: '5px' }}>
      <label htmlFor="input">Input Field:</label>
      <input
        type="text"
        id="input"
        value={counter.name}
        onChange={onChangeHandler}
      />
    </div>
  );
}
