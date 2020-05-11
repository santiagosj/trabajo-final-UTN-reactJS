import React, { useContext } from 'react'
import {ProductContext} from '../../services/Context/ProductsProvider'

const CartItem = ({cartData}) => {

    const state = useContext(ProductContext)

    const rows = cartData.map((product,index)=>{
        return (
            <tr key={index}>
                <td> {product.title} </td>
                <td> $ {product.price} </td>
                <td>
                   <button onClick={()=> state.removeProduct(state.cart.indexOf(product))}> X </button> | Sacar del carrito
                </td>
             </tr>
        )
    })
    return (
       <tbody>{rows}</tbody>    
    )
}

export default CartItem
