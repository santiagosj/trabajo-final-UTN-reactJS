import React, { useContext } from 'react'
import CartItem from './CartItem'
import {CartContext} from '../../services/Context/CartProvider'
import './Cart.scss'

/**
 * DEFINIR - 
 * changeProductQuantity
 */

const Cart = () => {

     const{ cart }= useContext(CartContext)
     
     console.log(typeof cart)

     const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
     const checkout = ()=> {
       alert(`El total de su compra es: $ ${totalPrice} Gracias por comprar en lo de la china`)
     }

    return (
        <table id="customers">
            <CartHeader/>
             <CartItem 
               cartData={cart}
             />
            <tfoot>
              <tr>
                <td>Precio total: ${totalPrice}</td>
              </tr>
              <button onClick={checkout}>Comprar</button>
            </tfoot> 
            
        </table>
    )
}

const CartHeader = ()=>{
    return(
      <thead>
        <tr>
           <th>Producto</th>
           <th>Precio</th>
           <th>Cantidad</th>
        </tr>
      </thead>
    )
  }

export default Cart
