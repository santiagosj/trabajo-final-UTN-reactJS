import React,{useState, createContext} from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {

    //estado inicial del cart
    const initState = {
        cart:[], //<-- lista de productos únicos
        cartCount:0, //<-- cantidad de productos en el cart
        totalPrice: 0, //<-- precio total del Cart
        addProduct: addProduct, //<-- función para agregar productos al Cart
        removeProduct: removeProduct, // <-- función para sacar el producto del Cart 
        increseQuantity:increseQuantity,// <--función para incrementar la cantidad
        decreseQuantity:decreseQuantity // <-- función para disminuir la cantidad
    }

    const [cartState, setCartState] = useState(initState)

//=====================================================================
                //agregar productos al carrito
//=====================================================================

    function addProduct(product){
       const cartList = cartState.cart // propiedad cart[] del estado del Cart
      
       //producto nuevo a agregar al carrito 
       const newProduct = {
           quantity:1,
           id:product.id,
           price:product.price,
           title:product.title,
           description:product.description,
           total:product.price
       }

       const productoAgregadoAlCart = cartList.filter(i => i.id === product.id) // <-- producto único agregado al carrito

       if(productoAgregadoAlCart.length > 0){

           const pos = cartList.map(i => i.id).indexOf(product.id) // <-- posicion del porducto en el Cart[] 
    
           cartList[pos].quantity += 1;

           cartList[pos].total += cartList[pos].price

       }else{

           cartList.push(newProduct)

       }

       setCartState({...cartState, cart: cartList, cartCount:getCartCount(), totalPrice:getTotalPrice()})
       
    } 

//=====================================================================
                    //Sacar productos del carrito
//=====================================================================
    function removeProduct(index){

        const cartList = cartState.cart;

        cartList.splice(index, 1);
       
        setCartState({...cartState, cart: cartList, cartCount:getCartCount(), totalPrice:getTotalPrice()})

    }
//=====================================================================
                         //increseQuantity
//=====================================================================    

    function increseQuantity(product){
        const cartList = cartState.cart;
        const productoAgregadoAlCart = cartList.filter(i => i.id === product.id)
        
        if(productoAgregadoAlCart.length > 0){

            const pos = cartList.map(i => i.id).indexOf(product.id) // <-- posicion del porducto en el Cart[] 
     
            cartList[pos].quantity += 1;
            cartList[pos].total += cartList[pos].price
 
        }

        setCartState({...cartState, cart: cartList, cartCount:getCartCount(), totalPrice:getTotalPrice()})
        console.log(product)
    }
//=====================================================================
                         //decreseQuantity
//===================================================================== 

    function decreseQuantity(product){
        const cartList = cartState.cart;
        const productoAgregadoAlCart = cartList.filter(i => i.id === product.id)
        
        if(productoAgregadoAlCart.length > 0){

            const pos = cartList.map(i => i.id).indexOf(product.id) // <-- posicion del porducto en el Cart[] 
     
            cartList[pos].quantity -= 1;
            cartList[pos].total -= cartList[pos].price
 
        }

        setCartState({...cartState, cart: cartList, cartCount:getCartCount(), totalPrice:getTotalPrice()})
    }

//=====================================================================
                         //getCartCount(helper)
//=====================================================================     

//recorre todo el array cart y de cada objeto obtiene el valor quantity y devuelve un solo valor 

    function getCartCount(){
          return cartState.cart.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0) 
    }

//=====================================================================
                         //getTotalPrice(helper)
//===================================================================== 
   function getTotalPrice(){
        return cartState.cart.reduce((acumulador, valorActual) => acumulador + valorActual.total, 0)
   }
   
//=====================================================================
                             //PROVIDER
//===================================================================== 

    return (
        <CartContext.Provider value={cartState}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

