import * as React from 'react';
import Child from './Child';
import { CounterProvider } from './contexts/CounterContext';
import MyContextProvider from './contexts/MyContext';
import CounterParent from './counter/CounterParents';
import MyButton from './MyButton';
import SevenColorIcon from './SevenColorIcon';
import './style.css';
import ThemeButtons from './ThemeButtons';
import UseEffectMain from './use-effect/UseEffectMain';

export default function App() {
  return (
    <CounterProvider>
      <MyContextProvider>
        <div>
          <h3>練習問題</h3>
          <UseEffectMain />
          <MyButton value="+" />
          <Child />
          <ThemeButtons />
          <CounterParent />
          <SevenColorIcon/>
        </div>
      </MyContextProvider>
    </CounterProvider>
  );
}
