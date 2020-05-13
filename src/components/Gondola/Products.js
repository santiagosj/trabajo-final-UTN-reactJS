import React from 'react'
import Product from './Product'
import './Product-section.scss'

const Products = ({products}) => {

    return (
        <div className='products-container'>

          { products.length && products.map(product => 
                  <Product 
                      product={product} 
                      key={product.id}/> 
                   )
          } 
        
        </div>
    )
}

export default Products
