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
    counterDispatch({ type: 'setname', payload: { step: 0, val1: e.value } });
  };

  return (
    <div style={{ background: '#ff34fa', padding: '5px' }}>
      <input type="text">def</input>
    </div>
  );
}
