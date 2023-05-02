import * as React from 'react';

interface ContextType {
  value1: string;
}

export const MyContext = React.createContext<any>([]);
export default function MyContextProvider({ children }) {
  const [myState, setMyState] = React.useState({ value1: 'init value1' });

  return (
    <MyContext.Provider value={[myState, setMyState]}>
      {children}
    </MyContext.Provider>
  );
}

// short hand
export const useMyContext = () => React.useContext(MyContext);
