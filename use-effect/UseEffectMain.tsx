import { useEffect, useState } from 'react';

export default function UseEffectMain() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log('use Effect main called');
  }, []);

  
  return <div style={{ background: '#f1f1f1' }}>UserEffectMain</div>;
}
