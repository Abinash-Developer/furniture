import React, { createContext, useState, useContext } from 'react';
import { userLogin } from './api';
import Swal from 'sweetalert2';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));
  const isAuthenticated = !!token;
  const login = async (userData) =>{
    try {
       const loggedInResult = await userLogin(userData);
       const token = loggedInResult.data.access_token;
       console.log(token)
       localStorage.setItem('authToken', token);
      setToken(token);
       if(loggedInResult.data.success){
                 Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: `${loggedInResult.data.message}`,
                   showConfirmButton: true,
                 }).then(function(result){
                   if(result.isConfirmed){
                     document.getElementsByClassName('btn-close')[0].click();
                   }
                 })
             }
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token,isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
