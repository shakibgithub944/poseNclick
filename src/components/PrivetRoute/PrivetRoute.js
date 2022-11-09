import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <div className=" text-center w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivetRoute;