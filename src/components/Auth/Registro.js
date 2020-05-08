import React,{useState, useEffect, useContext} from 'react'
import Form from '../Form/Form'
import useFormHook from '../../services/Hooks/CustomFormHook';
import {firebaseAuth} from '../../services/Context/FirebaseAuthProvider'

const Registro = () => {

    const [ registro, setRegistro ] = useState()

    const {handleSignup} = useContext(firebaseAuth)

     useEffect(()=>{
         
        async function handleRegistro(){
            
            const result = await inputs 
     
            setRegistro(result)
              
         }
         handleRegistro()
     })

     const handleRegistro = () => {
         console.table(registro)
         handleSignup(registro.email, registro.password1)
     }

      const {inputs, handleInputChange, handleSubmit} = useFormHook(handleRegistro);

    return (
        <div>
            <Form
               signUpForm
               handleSubmit={handleSubmit}
               handleInputChange={handleInputChange}
               inputs={inputs}
            />
        </div>
    )
}

export default Registro
