import React = require('react');

import { MyContext, useMyContext } from './contexts/MyContext';

export default function GrandChild() {
  const [state, setState] = useMyContext()
  return (
    <div>
      Grand
      <div>{state.value1}</div>
    </div>
  );
}
