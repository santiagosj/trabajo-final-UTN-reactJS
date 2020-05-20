import React, { useContext } from 'react'
import CartItem from './CartItem'
import {CartContext} from '../../services/Context/CartProvider'
import './Cart.scss'

const Cart = () => {

     const{ products, totalPrice }= useContext(CartContext)

     const checkout = ()=> {
       totalPrice > 0 ? 
       alert(`El total de su compra es: $ ${totalPrice} \n ✨Gracias por elegirnos vuelva pronto✨`) : 
       alert(`No hay productos en el carrito 🛒`)
       
     }

    return (
      <div className="cart-container">
        <h1 style={{textAlign:'center'}}> Tu carrito de compras <span role='img' aria-label="Carrito">🛒</span>  </h1>
      <table id="customers">
            <CartHeader/>
            <CartItem 
              cartData={products}
            />
            <tfoot>
                <tr>
                  <td>Valor total a pagar: ${totalPrice}</td>
                </tr>
            </tfoot> 
      </table>
        <button onClick={checkout} className='btn btn-2'>Comprar</button>
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
