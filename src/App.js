import React from 'react';
import AppHolder from '../src/components/AppHolder/AppHolder'
import {HashRouter} from 'react-router-dom'
import FirebaseAuthProvider from './services/Context/FirebaseAuthProvider'

import CartProvider from './services/Context/CartProvider';
/**
 * Escuchar la sesión de usuario acá
 */

const App = () => {
  
  return (
    <HashRouter className="App">
       
        <FirebaseAuthProvider>
         
                <CartProvider>
      
                    <AppHolder/>
       
                </CartProvider>
      
        </FirebaseAuthProvider>  
    
    </HashRouter>
  );

}

export default App;