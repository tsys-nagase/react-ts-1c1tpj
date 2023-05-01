import React = require('react');
import { context1 } from './App';

export default function GrandChild() {
  const [state, setState] = React.useContext(context1);
  return (
    <div>
      Grand
      <div>{state.value1}</div>
    </div>
  );
}
