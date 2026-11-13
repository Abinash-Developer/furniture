import {useAuth} from "../src/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const PublicRoutes = () => {
    const { token } = useAuth();
    if(token) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />;

}
export default PublicRoutes;