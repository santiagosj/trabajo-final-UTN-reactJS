import React from 'react'
import './Form.scss'

const Form = ({ 
    signUpForm,
    signInForm,
    handleSubmit,
    handleInputChange,
    inputs
    }) => {
    
        return (
            <div className='form--container'>

                    {signUpForm && (
                        <div className="signUp--form">
                          <h2>Registro</h2>
                            <form onSubmit={handleSubmit} name="registro-form">
                                <div>
                                    <label>Nombre</label>
                                    <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName || ''} required/>
                                </div>
                                <div>
                                    <label >Apellido</label>
                                    <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName || ''} required/>
                                </div>
                                <div>
                                    <label>Email </label>
                                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email || ''} required/>
                                </div>
                                <div>
                                    <label >Password</label>
                                    <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1 || ''} required/>
                                </div>
                                <div>
                                    <label>Confirmar password</label>
                                    <input type="password" name="password2" onChange={handleInputChange} value={inputs.password2 || ''} required/>
                                </div>
                                <button type="submit" >Enviar</button>
                            </form>
                        </div>
                       )}
            
                          {signInForm && (
                            <div className="signIn--form">
                              <h2>Iniciar Sesión</h2>
                                <form onSubmit={handleSubmit} name="login-form">
                                    <div>
                                        <label>Email </label>
                                        <input type="email" name="email" onChange={handleInputChange} value={inputs.email || ''} required />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1 || ''} required/>
                                    </div>
                                    <button type="submit">Entrar</button>
                               </form>
                            </div>
                          )}

                 </div>
         )
      }

export default Form
