import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { auth } from '../firebase';
import { Alert } from '@mui/material';


const authContext = createContext();
export const useAuth = () => useContext(authContext);



const INIT = {
    user: null,
}


const reducer = (state = INIT, action) => {
    switch (action.type) {
        case "GET_USER":
            return {...state, user: action.payload}
    
        default:
            return state;
    }
}


const AuthContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT)

    const googleProvider = new GoogleAuthProvider();

    async function register(name, lastName, email, password) {
        await createUserWithEmailAndPassword(auth, email, password).then(
          (response) => {  
            let newUser = response.user;
            updateProfile(newUser, {
              displayName: `${name} ${lastName}`,
            });
          }
        );
      }

    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }


    async function signInWithGoogle() {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    }


    function getUser() {
        return onAuthStateChanged(auth, (user) => {
            dispatch({
                type: "GET_USER",
                payload: user,
            })
        })
    }

    useEffect(() => {
        getUser();
    }, [])


    async function logOutUser() {
        return signOut(auth)
        .then(() => {
            <Alert>Successful</Alert>
        })
        .catch((error) => {
            <Alert severity='error'>Error</Alert>
        })
    }



    const values = {
        register,
        signInWithGoogle,
        user: state.user,
        logOutUser,
        loginUser,
    }
    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;