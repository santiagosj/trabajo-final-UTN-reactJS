import React,{useContext} from 'react'
import {CartContext} from '../../services/Context/CartProvider'
import './Button.scss'

/**
 * 
 * IMPLEMENTAR HOC 
 * 
 */

const Button = ({product}) => {

    const productState = useContext(CartContext)

    return (
        <div>
             <button 
                className="btn btn-2" 
                onClick={()=> productState.addProduct(product)}>
                Agregar al carrito
             </button>
        </div>
    )
}

export default Button
