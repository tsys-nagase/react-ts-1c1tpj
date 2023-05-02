import * as React from 'react';
import { useCounterContext } from '../contexts/CounterContext';
export default function CounterDisplay() {
  const counter = useCounterContext();

  return (
    <div style={{ background: '#ff34fa', padding: '5px' }}>
      CounterContext: {counter.num}
      <br />
      CounterContext: {counter.name}
      <br />
    </div>
  );
}
