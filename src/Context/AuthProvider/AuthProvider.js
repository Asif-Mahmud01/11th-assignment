import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider} from 'firebase/auth'
import app from '../../Firebase/Firebase-config';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubcribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return unsubcribe()
        }
    }, [])

    const authInfo = {
        user, loading, createUser, login, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;