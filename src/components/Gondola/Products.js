import React, { useState, useEffect, Fragment } from 'react'
import Product from './Product'
import './Product-section.scss'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const productsList = [
      {
        id:1,
        price:23,
        sku:1326548556543,
        title:'Orange Hat',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdCrI-1AvNIlloEGl40glUudMvCFxwH-iv2zPlEJoAWVyEWyZ',
        description:'lorem blablabalbalabl'
      },
      {
          id:2,
          price:45,
          sku:223154888114,
          title:'Blue Shirt',
          img:'https://cdn.pixabay.com/photo/2017/06/20/17/11/t-shirt-2423804_960_720.png',
          description:'lorem blablabalbalabl'
      }
  ]
    setProducts(productsList)
  },[])
  
    return (
        <div className='products-container'>
           {products.map( product => (<Product product={product} key={product.id}/>) )}
        </div>
    )
}

export default Products
