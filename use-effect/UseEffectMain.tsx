import * as React from 'react';
import { useEffect, useState } from 'react';

export default function UseEffectMain() {
  const [time, setTime] = useState(0);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log('use Effect main called');
    // setInterval(() => {
    //   setTime((prev) => {
    //     return prev + 1;
    //   });
    // }, 1000);
  }, []);

  useEffect(() => {
    console.log(time);
  }, [time]);

  const checkBoxHandler = (checked) => {
    console.log("checked")
    return !checked;
  };

  return (
    <div style={{ background: '#f1f1f1' }}>
      UserEffectMain
      <input
        type={'checkbox'}
        value={checked}
        onClick={checkBoxHandler}
      ></input>
    </div>
  );
}
