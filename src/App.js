import React from 'react';
import AppHolder from '../src/components/AppHolder/AppHolder'
import {HashRouter} from 'react-router-dom'
import FirebaseAuthProvider from './services/Context/FirebaseAuthProvider'
/**
 * Escuchar la sesión de usuario acá
 */

const App = () => {
  
  return (
    <HashRouter className="App">
      <FirebaseAuthProvider>
        <AppHolder />
      </FirebaseAuthProvider>  
    </HashRouter>
  );

}

export default App;