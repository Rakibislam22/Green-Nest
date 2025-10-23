import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const google = () => {
        return signInWithPopup(auth, provider);
    }

    const authData = {
        user,
        setUser,
        createUser,
        userLogin,
        google
    };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;