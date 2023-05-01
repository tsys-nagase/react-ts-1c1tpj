import React = require('react');
import { context1 } from './App';

export default function GrandChild2() {
  const [state, setState] = React.useContext(context1);
  const onClickHandler = (prevState) => {
    console.log('onclick');
    setState({ ...prevState, value1: 'updated', num1: prevState.num1 + 1 });
  };
  return (
    <div>
      Grand2
      <br />
      <button onClick={onClickHandler}>click</button>
    </div>
  );
}
