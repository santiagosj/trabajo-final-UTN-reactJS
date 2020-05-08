import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import ProductDetail from '../../pages/ProductDetail'

/**
 * --------------
 * Profile router 
 * --------------
 */

const ProductRouter = () => (
  <Switch>
    <Route exact path='/products' component={Home}/>
    <Route path='/products/:id' component={ProductDetail}/>
  </Switch>
)

export default ProductRouter
