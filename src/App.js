import React from 'react';
import AppHolder from '../src/components/AppHolder/AppHolder'
import {HashRouter} from 'react-router-dom'
import FirebaseAuthProvider from './services/Context/FirebaseAuthProvider'
import ProductsProvider from './services/Provider/ProductsProvider'
/**
 * Escuchar la sesión de usuario acá
 */

const App = () => {
  
  return (
    <HashRouter className="App">
      <FirebaseAuthProvider>
      
           <ProductsProvider>
      
              <AppHolder />
       
           </ProductsProvider>
      </FirebaseAuthProvider>  
    </HashRouter>
  );

}

export default App;