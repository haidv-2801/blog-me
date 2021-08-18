import React, { useState } from 'react';

type ContextValueType = {
  token: string;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

const AuthContextProvider: React.FC = (props) => {
  const initialToken = localStorage.getItem('TOKEN_KEY');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('TOKEN_KEY', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('TOKEN_KEY');
  };

  const contextValue: ContextValueType = {
    token: token as string,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
