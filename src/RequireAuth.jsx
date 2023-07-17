import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ isAuthenticated, children }) => {
    const location = useLocation();

    useEffect(() => {
        if (!isAuthenticated) {
            sessionStorage.setItem('referrer', location.pathname);
        }
    }, [isAuthenticated, location.pathname]);

    if (isAuthenticated) {
        return <>{children}</>;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequireAuth;
