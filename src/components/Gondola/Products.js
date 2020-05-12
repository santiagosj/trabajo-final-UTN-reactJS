import React, { useState, useEffect} from 'react'
import Product from './Product'
import './Product-section.scss'
import {db} from '../../services/Firebase/firebase'

const Products = () => {

  const [data, setData] = useState({products:[]})

  useEffect(() => {
      db.collection('products').onSnapshot(snapshot => {
         const result = snapshot.docs.map(doc => ({
             id: doc.id,
           ...doc.data()
         }))
         setData({products:result})
       })
       
   }, [])

    return (
        <div className='products-container'>

          { data.products.length && data.products.map(product => 
                  <Product 
                      product={product} 
                      key={product.id}/> 
                   )
          } 
        
        </div>
    )
}

export default Products
