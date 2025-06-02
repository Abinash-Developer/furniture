import React, { createContext, useState, useContext, useEffect } from 'react';
import { userLogin } from './api';
import Swal from 'sweetalert2';
import { getCartCount } from './api';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('authToken'));
  const isAuthenticated = !!token;
  useEffect(()=>{
    cartCount();
  })
  const login = async (userData) =>{
    try {
       const loggedInResult = await userLogin(userData);
       const token = loggedInResult.data.access_token;
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
  const cartCount = async ()=>{
    const count = await getCartCount()
    return count.data.result;
  }

  return (
    <AuthContext.Provider value={{ token,isAuthenticated,cartCount, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
