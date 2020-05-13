import React,{useState, useEffect} from 'react'
import {db} from '../services/Firebase/firebase'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Thumb from '../components/Thumb/Thumb'
import './ProductDetail.scss'
const ProductDetail = ({match}) => {

    const [data,setData]=useState({})

    useEffect(() => {
        db.doc(`products/${match.params.id}`)
        .get()
           .then( doc => {
            setData(doc.data())
        })
 
      }, [match])  
     
    return (
        <div>
            <h1>Product Detail page </h1>
            <h2>{data.title}</h2>
            <section className="product-detail-container">
                {!!data.productImgs && <Carousel emulateTouch>
                    {data.productImgs && data.productImgs.map((imgSrc, i ) => 
                        <Thumb src={imgSrc.src} alt={`foto${i}`} key={i}/>
                    )}
                </Carousel>}
                <p className="product-description">
                   {data.description}
                </p>
            </section>
            
        </div>
    )
}

export default ProductDetail
