import React, { useContext } from 'react'
import {CartContext} from '../../services/Context/CartProvider'

/**
 *  DEFINIR - 
 *  increseQuantity 
 *  decreseQuantity
 * 
 */

const CartItem = ({
      cartData,
      changeProductQuantity
     }) => {

    const cartState = useContext(CartContext)


    const rows = cartData.map((product,index)=>{

        const increseQuantity = () =>{
            console.log(product.quantity += 1 )
         }
     
         const decreseQuantity = () =>{
            if(product.quantity > 1){
               console.log(product.quantity -= 1 )
            }
         }

          const unidiadesStyle = product.quantity === 1 ? {textDecoration:'line-through'} : {textDecoration:'none'}

        return (
            <tr key={index}>
                <td> {product.title} </td>
                <td> $ {product.price} </td>
                <td> 
                    {
                    (product.quantity > 1 && `${product.quantity} Unidades `) 
                       ||                                                 //===============>>>> 💥💥👾👾👾👾
                    (product.quantity === 1 && `${product.quantity} Unidad `) 
                    } 
                    <button onClick={increseQuantity}> + </button> Agregar unidades | <button onClick={decreseQuantity} disabled={product.quantity === 1 && true}> - </button> <span style={unidiadesStyle}>Quitar Unidades</span> 
                </td>
                <td>
                   <button onClick={()=> cartState.removeProduct(cartState.cart.indexOf(product))}> X </button> | Sacar del carrito 
                </td>
             </tr>
        )
    })
    return (
       <tbody>{rows}</tbody>    
    )
}

export default CartItem
