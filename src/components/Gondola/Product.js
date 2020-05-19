import React from 'react'
import Thumb from '../Thumb/Thumb'
//import {CartContext} from '../../services/Context/CartProvider'
import {Link} from 'react-router-dom'
import Button from '../Buttons/Button'

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
        <Link to={`/products/${id}`} className="btn btn-6">
             ver producto
        </Link>
            <p className="shelf-item__title">
               {title}
            </p>
       
            <div>
               <p>precio:${price}</p>
            </div>

           <Button product={product}/>

        </div>
    )
}

/*const AddBtn = ({product}) => {

    const productState = useContext(CartContext)
    
    return(
        <button className="shelf-item__buy-btn" onClick={()=> productState.addProduct(product)}>Agregar al carrito</button>
    )

}*/

export default Product
