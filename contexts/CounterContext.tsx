import * as React from 'react';

type CounterAction = {
  type: '+' | '-' | 'setname';
  payload: { step: number; val1?: string };
};

type CounterState = {
  name?: string;
  num: number;
};

const initialState: CounterState = { name: 'def name', num: 0 };

const CounterContext = React.createContext<CounterState>(undefined);
const CounterDispatchContext = React.createContext<
  React.Dispatch<CounterAction>
>(() => {});
// reducer
export const counterReducer = (prevState: CounterState, action: CounterAction) => {
  console.log('step:', action.payload.step);
  switch (action.type) {
    case '+':
      return { ...prevState, num: prevState.num + action.payload.step };
    case '-':
      return { ...prevState, num: prevState.num - action.payload.step };
    case 'setname':
      return { ...prevState, name: action.payload.val1 };
    default:
      throw new Error('errorです');
  }
};
export const CounterProvider = ({ children }) => {
  const [counter, counterDispatch] = React.useReducer(
    counterReducer,
    initialState
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
