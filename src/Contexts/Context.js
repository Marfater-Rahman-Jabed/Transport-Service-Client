import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const Context = ({ children }) => {


    const [user, setUser] = useState();
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const LogOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setLoading(false);

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const AuthInfo = {
        CreateUser, SignIn, LogOut, user,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;