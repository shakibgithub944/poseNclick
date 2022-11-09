import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UserContext, { authContext } from '../../UserContext/UserContext';

const PrivetRoute = ({ chidren }) => {
    const { user, loading } = UserContext(authContext);
    const location = useLocation();
   
    if (loading) {
        return <div>loading........</div>
    }

    if (user) {
        return chidren
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivetRoute;