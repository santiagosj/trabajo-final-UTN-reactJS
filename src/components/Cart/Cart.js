import React, { useContext } from 'react'
import CartItem from './CartItem'
import ProductContext from '../../services/Context/ProductContext'
import './Cart.scss'
const Cart = () => {

     const{cart}= useContext(ProductContext)

    return (
        <table id="customers">
            <CartHeader/>
            <CartItem 
               cartData={cart}
            />
        </table>
    )
}

const CartHeader = ()=>{
    return(
      <thead>
        <tr>
           <th>Producto</th>
           <th>Precio</th>
        </tr>
      </thead>
    )
  }

export default Cart
