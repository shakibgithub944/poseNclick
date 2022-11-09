import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../UserContext/UserContext';


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <div>loading........</div>
    }

    if (user && user.email) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivetRoute;