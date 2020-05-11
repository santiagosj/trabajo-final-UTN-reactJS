import React,{useState,createContext} from 'react'

/**
 * 
 * @param {*} param0 
 * 
 * 1- Traer productos acá.
 * 2- Hacer la suma del cart acá
 *    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
 */
export const ProductContext = createContext()

const ProductsProvider = ({children}) => {

    const initState = {
        cart:[],
        cartCount:0,
        addProduct: addProduct,
        removeProduct: removeProduct
    }

    const [globalState, setGlobalState] = useState(initState)

    function addProduct(product){
       let cartList = globalState.cart

       const newProduct = {
           count:1,
           id:product.id,
           price:product.price,
           title:product.title,
           description:product.description
       }
       
       const filter = cartList.filter(i => i.id === product.id)

       if(filter.length > 0){
           const pos = cartList.map(i => i.id).indexOf(product.id)
           cartList[pos].count += 1;
       }else{
           cartList.push(newProduct)
       }
       setGlobalState({...globalState,cart:cartList,cartCount:getCartCount()})
       console.log(cartList)
    } 

    function removeProduct(index){
        const cartLlist = globalState.cart

        cartLlist.splice(index, 1)
       
        setGlobalState({...globalState,cart:cartLlist,cartCount:getCartCount()})
    }

    function getCartCount(){
          let cnt = 0;

          if(globalState.cart.length > 0){
              globalState.cart.forEach(p => {
                  cnt += p.count
              })
          }

          return cnt
    }

    return (
        <ProductContext.Provider value={globalState}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsProvider
