import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const authContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const UserContext = ({ children }) => {
    const [user, setUser] = useState('');


    // sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // googleSignIn
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // getUser
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])
    // signOut
    const logOutUser = () => {
        signOut(auth)
    }



    const authInfo = {
        user,
        createUser,
        loginUser,
        googleSignIn,
        logOutUser,


    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;