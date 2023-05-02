import * as React from 'react';

type CounterAction = {
  type: '+' | '-';
  payload: { step: number; val1?: string };
};

const CounterContext = React.createContext<{
  name: string;
  num: number;
}>({ name: 'def name', num: 0 });
const CounterDispatchContext = React.createContext<
  React.Dispatch<CounterAction>
>(() => {});

export const CounterProvider = ({ children }) => {
  const [counter, counterDispatch] = React.useReducer(
    (prev: number, action: CounterAction) => {
      console.log('step:', action.payload.step);
      switch (action.type) {
        case '+':
          return prev + action.payload.step;
        case '-':
          return prev - action.payload.step;
        default:
          throw new Error('errorです');
      }
    },
    0
  );

  return (
    <CounterContext.Provider value={counter}>
      <CounterDispatchContext.Provider value={counterDispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

// short hand
export const useCounterContext = () => React.useContext(CounterContext);
export const useCounterDispatchContext = () =>
  React.useContext(CounterDispatchContext);