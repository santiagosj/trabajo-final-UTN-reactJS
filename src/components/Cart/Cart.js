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
    

     const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

     const checkout = ()=> {
       totalPrice > 0 ? 
       alert(`El total de su compra es: $ ${totalPrice} \n ✨Gracias por elegirnos vuelva pronto✨`) : 
       alert(`No hay productos en el carrito 🛒`)
     }

    return (
      <div className="cart-container">
      <table id="customers">
            <CartHeader/>
            <CartItem 
              cartData={cart}
            />
            <tfoot>
                <tr>
                  <td>Precio total: ${totalPrice}</td>
                </tr>
            </tfoot> 
      </table>
        <button onClick={checkout}>Comprar</button>
      </div>
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
