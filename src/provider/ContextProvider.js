import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useState} from 'react';
const AppContext = React.createContext();

const ContextProvider = props => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (previousState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...previousState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...previousState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...previousState,
          username: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...previousState,
          username: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (username, password) => {
        let userToken = null;
        if (username === 'test' && password === 'test') {
          userToken = 'sometoken';
          try {
            await EncryptedStorage.setItem('userToken', userToken);
          } catch (err) {
            console.log(err);
          }
        }
        dispatch({type: 'LOGIN', id: username, token: userToken});
      },
      signOut: async () => {
        try {
          await EncryptedStorage.removeItem('userToken');
        } catch (err) {
          console.log(err);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: async () => {
        try {
          await EncryptedStorage.setItem('userToken', userToken);
        } catch (err) {
          console.log(err);
        }
        setUserToken('tatatoo');
      },
    }),
    [],
  );

  return (
    <AppContext.Provider
      value={{
        loginState,
        authContext,
        dispatch,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
export {ContextProvider, AppContext};
