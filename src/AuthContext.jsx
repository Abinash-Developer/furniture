
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();


  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('token');
    return savedToken ? JSON.parse(savedToken) : null;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');

    if (savedToken) {
      setToken(JSON.parse(savedToken));
    }

    setLoading(false);
  }, []);

  // LOGIN
  const login = (userData) => {
    setToken(userData.token);
    localStorage.setItem('token', JSON.stringify(userData.token));
    navigate('/', { replace: true });
  };

  // LOGOUT
  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ token, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
