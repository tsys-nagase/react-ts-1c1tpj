import React = require('react');
import { context1 } from './App';

export default function Theme() {
  const [state, setState] = React.useContext(context1);
  const THEMES = ['green', 'blue', 'red'];

  const handleThemeChange = (theme) => {
    setState((prevState) => ({
      ...prevState,
      theme,
    }));
  };

  return (
    <div>
      <div style={{ background: '#dafada' }}>
        Themea
        {THEMES.map((_theme) => {
          console.log(_theme);
          return (
            <button
              key={_theme}
              style={{ background: _theme }}
              onClick={() => handleThemeChange(_theme)}
            >
              {_theme}
            </button>
          );
        })}
        <div>{state.value1}</div>
      </div>
    </div>
  );
}
