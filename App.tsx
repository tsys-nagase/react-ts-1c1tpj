import * as React from 'react';
import MyButton from './MyButton';
import './style.css';

export default function App() {
  return (
    <div>
      <h3>練習問題</h3>
      <MyButton value="+" />
      <Child />
    </div>
  );
}
