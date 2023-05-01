import React = require('react');
import { context1 } from './App';

export default function Theme() {
  const [state, setState] = React.useContext(context1);
  const THEMES = ['light', 'dark', 'red'];
  return (
    <div style={{ background: '#dafada' }}>
      Theme
      {
      THEMES.map((theme)=>{

        console.log(theme)
        return "xx"
      
      }
    }
    
      <div>{state.value1}</div>
    </div>
  );
}
