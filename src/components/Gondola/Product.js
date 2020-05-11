import React,{useContext} from 'react'
import Thumb from '../Thumb/Thumb'
import ProductContext from '../../services/Context/ProductContext'
import {Link} from 'react-router-dom'
const Product = ({product}) => {

    const {id, img, title, price} = product

    return (
        <div className="shelf-item"
             data-id={id} 
        >
        <Link to={`/products/${id}`} className="link">
            <Thumb 
                classes="shelf-item__thumb"
                src={img}
                alt={title}
            />
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
    const productState = useContext(ProductContext)
    return(
        <button className="shelf-item__buy-btn" onClick={()=> productState.addProduct(product)}>Agregar al carrito</button>
    )
}

export default Product
