import React from 'react'
import Products from '../components/Gondola/Products'

//cargar lista de productos acá
//const productList = useContext(ProductContext).products;
/*const products = [
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
]*/

const Home = () => {
    return (
        <div>
            <h1>Home - Productos</h1> 
            <Products/>
        </div>
    )
}

export default Home
