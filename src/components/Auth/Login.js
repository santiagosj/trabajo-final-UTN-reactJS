import React,{useState, useEffect, useContext} from 'react'
import Form from '../Form/Form'
import useFormHook from '../../services/Hooks/CustomFormHook';
import {firebaseAuth} from '../../services/Context/FirebaseAuthProvider'

const Login = () => {   
   
    const [ login, setLogin ] = useState()

    const {handleSignIn} = useContext(firebaseAuth)

    useEffect(()=>{
        async function handleLoginData(){
            
            const result = await inputs 
     
            setLogin(result)
              
         }
         handleLoginData()   
     })

     const handleLogin = () => {
        console.table(login)
        handleSignIn(login.email, login.password1)
    }

     const {inputs, handleInputChange, handleSubmit} = useFormHook(handleLogin);

    return (
        <div>
            <Form
               signInForm
               handleSubmit={handleSubmit}
               handleInputChange={handleInputChange}
               inputs={inputs}
            />
            
        </div>
    )
}

export default Login
