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
    return () => {
      console.log('🈲UserEffect終了処理 ');
    };
  }, []);

  useEffect(() => {
    console.log('✅変更後の値は', checked);
    return () => {
      console.log('チェックのクリーンナップ処理', checked);
    };
  }, [checked]);

  const checkBoxHandler = (checked) => {
    console.log('checked');
    setChecked(!checked);
  };

  return (
    <div style={{ background: '#f1f1f1' }}>
      UserEffectMain
      <br />
      <label>
        <input
          type={'checkbox'}
          value={checked}
          onClick={() => checkBoxHandler(checked)}
        ></input>
        click me
      </label>
    </div>
  );
}
