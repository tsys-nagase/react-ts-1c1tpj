import React = require('react');
import { context1 } from './App';

export default function GrandChild2() {
  const [state, setState] = React.useContext(context1);
  const onClickHandler = () => {
    console.log('onclick');
    setState({ value1: 'updated' });
  };
  return (
    <div>
      Grand2
      <br />
      <button onClick={onClickHandler}>click</button>
    </div>
  );
}
