import { Outlet, Navigate,useLocation } from 'react-router-dom';
import {useAuth} from './AuthContext';
const ProtectedRoutes = () => {
  const { token } = useAuth();
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
export default ProtectedRoutes;