import React, { useState, createContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AurtProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [danger, setDanger] = useState('');
    const [success, setSuccess] = useState('');

    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, providerGoogle)
    }
    const authInfo = {
        user,
        setUser,
        loginWithGoogle,
        danger,
        setDanger,
        success,
        setSuccess,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AurtProvider;