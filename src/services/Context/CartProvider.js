import React,{useState, createContext} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const initState = {
        cart:[],
        cartCount:0,
        addProduct: addProduct,
        removeProduct: removeProduct
    }

    const [cartState, setCartState] = useState(initState)
    
    //agregar productos al carrito

    function addProduct(product){
       let cartList = cartState.cart

       const newProduct = {
           quantity:1,
           id:product.id,
           price:product.price,
           title:product.title,
           description:product.description
       }
       
       const productoAgregadoAlCart = cartList.filter(i => i.id === product.id) //producto agregado al carrito

       if(productoAgregadoAlCart.length > 0){
           const pos = cartList.map(i => i.id).indexOf(product.id)
           cartList[pos].quantity += 1;
       }else{
           cartList.push(newProduct)
       }
       setCartState({...cartState, cart: cartList, cartCount:getCartCount()})
       console.log(productoAgregadoAlCart)
    } 

    //Sacar productos del carrito

    function removeProduct(index){

        const cartLlist = cartState.cart

        cartLlist.splice(index, 1)
       
        setCartState({...cartState, cart: cartLlist, cartCount:getCartCount()})

    }

    //Cuenta productos 

    function getCartCount(){
          let count = 0;

          if(cartState.cart.length > 0){
              cartState.cart.forEach(p => {
                  count += p.quantity
              })
          }

          return count
    }

    //Precio total 
    /**
     * 1 - increseQuantity - equivalente a addProduct
     * 2 - decreseQuantity - saca del carrito 1 producto
     * 2 - addProduct - agrega 1 producto al carrito 
     * 3 - removeProduct - elimna del cart el producto sin importar la cantidad
     */

    return (
        <CartContext.Provider value={cartState}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

/**
 * 
 */