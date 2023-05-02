import React = require('react');
import CounterChild1 from './CounterChild1';
import * as React from 'react';
import CounterDisplay from './CounterDisplay';

export default function CounterParent() {
  return (
    <div style={{ background: '#246643', padding: '5px' }}>
      <CounterChild1 />
      <CounterDisplay />
    </div>
  );
}
