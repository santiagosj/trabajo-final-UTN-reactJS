import React,{createContext} from 'react'
import { auth } from '../firebase';

export const firebaseAuth = createContext()

const handleSignup = (email, password, ...inputs) => {
    console.log('usuario registrado')
    auth.userSession('createUser',email, password, ...inputs)
}

const handleSignIn = (email, password) => {
    console.log('usuario logueado')
    auth.userSession('signIn', email, password)
}

const handleSignOut = () => {
    console.log('el suario cerró sesión')
    auth.logout()
}

const FirebaseAuthProvider = (props) => { 
    
    return (
        <firebaseAuth.Provider
            value={{
               handleSignup,
               handleSignIn,
               handleSignOut
            }}>
               {props.children}
        </firebaseAuth.Provider>
    )
}

export default FirebaseAuthProvider
