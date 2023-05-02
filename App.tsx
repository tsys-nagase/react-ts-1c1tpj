import * as React from 'react';
import Child from './Child';
import { CounterProvider } from './contexts/CounterContext';
import MyContextProvider from './contexts/MyContext';
import CounterParent from './counter/CounterParents';
import MyButton from './MyButton';
import './style.css';
import ThemeButtons from './ThemeButtons';

export default function App() {
  return (
    <CounterProvider>
      <MyContextProvider>
        <div>
          <h3>練習問題</h3>
          <MyButton value="+" />
          <Child />
          <ThemeButtons />
          <CounterParent />
        </div>
      </MyContextProvider>
    </CounterProvider>
  );
}
