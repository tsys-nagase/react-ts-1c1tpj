import * as React from 'react';

const CounterContext = React.createContext<{
  type: string;
  num: number;
}>({ type: "string", num: 0 });
const CounterDispatchContext = React.createContext<any>({});

export const CounterProvider = ({ children }) => {
  const [counter, counterDispatch] = React.useReducer(
    (prev, { type, step }) => {
      console.log('step:', step);
      switch (type) {
        case '+':
          return prev + step;
        case '-':
          return prev - step;
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
