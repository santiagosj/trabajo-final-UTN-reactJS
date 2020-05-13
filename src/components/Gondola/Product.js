import React,{useContext} from 'react'
import Thumb from '../Thumb/Thumb'
import {CartContext} from '../../services/Context/CartProvider'
import {Link} from 'react-router-dom'
const Product = ({product}) => {

    const {id, prevImg, title, price} = product

    return (
        <div className="shelf-item"
             data-id={id} 
        >
        <Thumb 
                src={prevImg}
                alt={title}
            />
        <Link to={`/products/${id}`} className="link">
             ver producto
        </Link>
            <p className="shelf-item__title">
               {title}
            </p>
       
            <div>
               <p>precio:${price}</p>
            </div>

           <AddBtn product={product}/>

        </div>
    )
}

const AddBtn = ({product}) => {
    const productState = useContext(CartContext)
    
    return(
        <button className="shelf-item__buy-btn" onClick={()=> productState.addProduct(product)}>Agregar al carrito</button>
    )
}

export default Product
