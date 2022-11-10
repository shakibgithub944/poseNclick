import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <div className=" mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-400"></div>
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivetRoute;