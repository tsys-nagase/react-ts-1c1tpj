import * as React from 'react';
import Child from './Child';
import MyContextProvider from './contexts/MyContext';
import MyButton from './MyButton';
import './style.css';
import Theme from './Theme';

interface ContextType {
  value1: string;
  num1?: number;
}

export const context1 = React.createContext<any>([]);
export default function App() {
  const [myState, setMyState] = React.useState({
    value1: 'init value1',
    num: 0,
  });

  return (
    <MyContextProvider>
      <div>
        <h3>練習問題</h3>
        <MyButton value="+" />
        <Child />
        <Theme />
      </div>
    </MyContextProvider>
  );
}
