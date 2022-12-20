import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState, createContext} from 'react';
import {auth} from '../firebase/clientApp';

// @ts-ignore
export const AuthContext = createContext();

export const AuthProvider = ({ children }:{children:any}) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        // @ts-ignore
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
        }}
      >
        <h1>Loading User...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};