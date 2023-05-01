import * as React from 'react';
import Child from './Child';
import MyContextProvider from './contexts/MyContext';
import MyButton from './MyButton';
import './style.css';
import Theme from './Theme';



export default function App() {

  
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
