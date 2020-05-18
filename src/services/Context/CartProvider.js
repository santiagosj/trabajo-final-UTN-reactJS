import React,{useState, createContext} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {

    //estado inicial del cart
    const initState = {
        cart:[], //<-- lista de productos únicos
        cartCount:0, //<-- cantidad de productos en el cart
        addProduct: addProduct, //<-- funcion para agregar productos al Cart
        removeProduct: removeProduct, // <-- funcion para sacar un producto 
        totalPrice: 0 //<-- precio total del Cart
    }

    /**
     * 
     * producto:{
     *      quantity[number]
     *      id[string]
     *      price[number]
     *      total:[number]
     *      title[string]
     *      description[string]
     *    }
     * 
     */

    const [cartState, setCartState] = useState(initState)
    
    //agregar productos al carrito

    function addProduct(product){
       let cartList = cartState.cart // propiedad cart[] del estado del Cart
       // let tp = cartState.totalPrice // propiedad totalPrice del estado del Cart

       //producto nuevo a agregar al carrito 
       const newProduct = {
           quantity:1,
           id:product.id,
           price:product.price,
           title:product.title,
           description:product.description,
           total:product.price
       }

       //producto único agregado al carrito
       const productoAgregadoAlCart = cartList.filter(i => i.id === product.id) 

       if(productoAgregadoAlCart.length > 0){

           const pos = cartList.map(i => i.id).indexOf(product.id) // pos = id del producto

           cartList[pos].quantity += 1;
           
           cartList[pos].total += cartList[pos].price

       }else{

           cartList.push(newProduct)

       }

       setCartState({...cartState, cart: cartList, cartCount:getCartCount(), totalPrice:getTotalPrice()})
       
    } 

    //Sacar productos del carrito

    function removeProduct(index){

        const cartList = cartState.cart;

        cartList.splice(index, 1);
       
        setCartState({...cartState, cart: cartList, cartCount:getCartCount(), totalPrice:getTotalPrice()})

    }

    //recorre todo el array cart y de cada objeto obtiene el valor quantity y devuelve un solo valor 

    function getCartCount(){
          return cartState.cart.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0) 
    }

  
   function getTotalPrice(){
        return cartState.cart.reduce((acumulador, valorActual) => acumulador + valorActual.total, 0)
   }

    return (
        <CartContext.Provider value={cartState}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

