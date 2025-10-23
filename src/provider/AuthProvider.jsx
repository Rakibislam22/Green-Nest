import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const google = () => {
        return signInWithPopup(auth,provider);
    }

    const authData = { 
        user,
        setUser,
        createUser,
        google
     };

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;