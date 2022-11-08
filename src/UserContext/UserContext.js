import React, { createContext } from 'react';

export const authContext = createContext();

const UserContext = ({ children }) => {

    const user = {
        name: 'shakib',
    }

    const authInfo = { user }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;