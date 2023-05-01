import React = require('react');
import GrandChild from './GrandChild';

export default function Child() {
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
}
