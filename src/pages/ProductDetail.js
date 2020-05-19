import React,{useState, useEffect} from 'react'
import {db} from '../services/Firebase/firebase'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Thumb from '../components/Thumb/Thumb'
import './ProductDetail.scss';
import { Link } from 'react-router-dom'
//import {CartContext} from '../services/Context/CartProvider'
import Button from '../components/Buttons/Button' 
const ProductDetail = ({match}) => {

    const [ data, setData]=useState({})

    useEffect(() => {
     db.doc(`products/${match.params.id}`)
        .get()
           .then( doc => (
               setData({
                    id:doc.id,
                    ...doc.data()
               })
             )
           )
        
      }, [match])  

     console.log(data)

    return (
        <div className="product-detail-section">
            <h1>Product Detail page </h1>
            <h2>{ }</h2>
            <section className="product-detail-container">
                {!!data.productImgs && <Carousel emulateTouch showThumbs={false}>
                    {data.productImgs && data.productImgs.map((imgSrc, i ) => 
                        <Thumb src={imgSrc.src} alt={`foto${i}`} key={i}/>
                    )}
                </Carousel>}
                <p className="product-description">
                   {data.description} <br/>
                   ---------------------------------------------------<br/>
                   precio: $ {data.price} | categoría: {data.category} <br/>
                   ---------------------------------------------------<br/>
                   <Button product={data}/>
                </p>
                
                 
            </section>

            <Link to={'/products'}>Volver </Link>
        </div>
    )
}


/*const AddBtn = ({product}) => {

    const productState = useContext(CartContext)
    
    return(
        <button className="shelf-item__buy-btn" onClick={()=> productState.addProduct(product)}>Agregar al carrito</button>
    )

}*/

export default ProductDetail
