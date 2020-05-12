import React,{useState, useEffect} from 'react'
import {db} from '../services/Firebase/firebase'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ProductDetail = ({match}) => {
    const [data,setData]=useState({})

    const token = ['a9b24514-34d6-46fe-acda-7aa6835be2fa','7095e00d-acd1-4bd1-85ef-487fbaa8621e']

    useEffect(() => {
        db.doc(`products/${match.params.id}`)
        .get()
           .then( doc => {
            setData(doc.data())
        })
 
      }, [match])  
     console.log(data)
    return (
        <div>
            <h1>Product Detail page </h1>
            <h2>{data.title}</h2>
            {data.productImgs && data.productImgs.map((imgSrc, i )=> <img src={imgSrc.src} alt={`foto${i}`} key={i}/>)}
        </div>
    )
}

export default ProductDetail
