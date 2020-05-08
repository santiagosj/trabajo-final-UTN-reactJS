import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../Auth/Login'
import Registro from '../Auth/Registro'
import ProductRouter from '../Gondola/ProductRouter';

const MainContent = ({loged}) => {

       return(
              <div className="mainContent" >
 
                  {!loged && ( 
                     <Switch>
                            <Route exact path={'/login' } component={Login} />
                            <Route exact path={'/signup'} component={Registro} />
                            <Redirect to="/login"/>
                    </Switch>
                  )}

                  {loged && (
                         <Switch>
                            <Route  path={'/products'} component={ProductRouter}/>
                            <Redirect to="/products"/>
                         </Switch>
                  )}
                   
              </div>
       )
}

export default MainContent


/**
 * 
 * 
 * =============================
 * CONTENIDO PRINCIPAL CON RUTAS
 * =============================
 * 
 * 
 */