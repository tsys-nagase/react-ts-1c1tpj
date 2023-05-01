import React = require('react');

import { MyContext } from './contexts/MyContext';

export default function GrandChild() {
  const [state, setState] = React.useContext(MyContext);
  return (
    <div>
      Grand
      <div>{state.value1}</div>
    </div>
  );
}
