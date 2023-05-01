import React = require('react');
import { context1 } from './App';

export default function Theme() {
  const [state, setState] = React.useContext(context1);
  const THEMES = ['light', 'dark', 'red'];
  return (
    <div>
      <div style={{ background: '#dafada' }}>
        Themea
        {THEMES.map((_theme) => {
          console.log(_theme);
          return (
            <input key={_theme} style={{ background: _theme }}>
              {_theme}
            </input>
          );
        })}
        <div>{state.value1}</div>
      </div>
    </div>
  );
}
