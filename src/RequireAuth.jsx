import React, { useEffect } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const RequireAuth = ({ isAuthenticated }) => {
    const location = useLocation();

    useEffect(() => {
        if (!isAuthenticated) {
            sessionStorage.setItem('referrer', location.pathname);
        }
    }, [isAuthenticated, location.pathname]);

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequireAuth;
