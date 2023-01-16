import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(app);

const Context = ({ children }) => {
    const AuthInfo = {
        user: 'Jabed',
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;