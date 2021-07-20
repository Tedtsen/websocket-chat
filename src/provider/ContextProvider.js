import React from 'react';
import {useState} from 'react';
const AppContext = React.createContext();

const ContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState('breathtaking');

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
export {ContextProvider, AppContext};
