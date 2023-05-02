import * as React from 'react';
import { useEffect, useState } from 'react';

export default function UseEffectMain() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('use Effect main called');
    setInterval(() => {
      setTime((prev) => {
        return prev + 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(time);
  }, [time]);

  return <div style={{ background: '#f1f1f1' }}>UserEffectMain</div>;
}
