import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const authContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    console.log(user);
    const [loading, setLoading] = useState(true)


    // sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        setLoading(true)
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
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    // signOut
    const logOutUser = () => {
        signOut(auth)
    }
    const updateUser = (name, photourl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        googleSignIn,
        logOutUser,
        updateUser,
        loading,

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;