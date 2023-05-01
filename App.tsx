import * as React from 'react';
import Child from './Child';
import MyButton from './MyButton';
import './style.css';

interface ContextType {
  value1: string;
}

export const context1 = React.createContext<ContextType[]>([]);
export default function App() {
  const [myState, setMyState] = React.useState({ value1: 'init value1' });

  return (
    <context1.Provider value={[myState, setMyState]}>
      <div>
        <h3>練習問題</h3>
        <MyButton value="+" />
        <Child />
      </div>
    </context1.Provider>
  );
}
