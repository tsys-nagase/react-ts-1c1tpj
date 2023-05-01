import React = require('react');
import GrandChild from './GrandChild';
import GrandChild2 from './GrandChild2';

export default function Child() {
  return (
    <div>
      Child
      <GrandChild />
      <GrandChild2/>
    </div>
  );
}
