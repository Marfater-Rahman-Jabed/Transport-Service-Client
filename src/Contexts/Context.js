import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const Context = ({ children }) => {


    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }
    const LogOut = () => {
        return signOut(auth);
    }
    const UpdateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
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
        CreateUser, SignIn, LogOut, user, googleSignIn, UpdateUser
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;