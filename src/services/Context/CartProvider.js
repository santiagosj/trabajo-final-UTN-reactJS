import React,{useState, createContext} from 'react'
//import {cartReducer} from '../Reducers/CartReducer'
export const CartContext = createContext()

const CartProvider = ({children}) => {

    const cartInitState = {
        products:[], //<-- lista de productos únicos
        cartCount:0, //<-- cantidad de productos en el products -- Quantity
        totalPrice: 0, //<-- precio total del Cart -- total
        addProduct, //<-- función para agregar productos al Cart
        removeProduct, // <-- función para sacar el producto del Cart 
        changeProductQuantity
    }

    const [cartState, setCartState] = useState(cartInitState)

    const productList = cartState.products

//=====================================================================
                   //agregar productos al carrito
//=====================================================================

    function addProduct(product){

       const newProduct = {
           quantity:1,
           id:product.id,
           price:product.price,
           title:product.title,
           description:product.description,
           total:product.price
       }

       if(productList.filter(i => i.id === product.id).length > 0){

           const pos = productList.map(i => i.id).indexOf(product.id) // <-- posicion del porducto en el Cart[] 
    
           productList[pos].quantity += 1;

           productList[pos].total += productList[pos].price

       }else{
           productList.push(newProduct)
       }

        setCartState({
            ...cartState, 
            products: productList,
            cartCount:getCartCount(), 
            totalPrice:getTotalPrice()
        })
       
    } 

//=====================================================================
                    //Sacar productos del carrito
//=====================================================================

    function removeProduct(index){

        productList.splice(index, 1);
       
        setCartState({
             ...cartState, 
             products: productList, 
             cartCount:getCartCount(), 
             totalPrice:getTotalPrice()
        })
    }

//=====================================================================
                         //changeProductQuantity
//=====================================================================

    function changeProductQuantity(action, product){
       
        
        if(productList.filter(i => i.id === product.id).length > 0){

            const pos = productList.map(i => i.id).indexOf(product.id) // <-- posicion del porducto en el Cart[] 

            if(action === '+'){
               ++productList[pos].quantity;
                productList[pos].total += productList[pos].price
            }else if (action === '-') {
                --productList[pos].quantity;
                productList[pos].total -= productList[pos].price
            }

        }
        setCartState({
            ...cartState, 
            products: productList, 
            cartCount: getCartCount(), 
            totalPrice: getTotalPrice()
        })
     }

//=====================================================================
                         //getCartCount(helper)
//=====================================================================     

//recorre todo el array products, obtiene el valor quantity y devuelve un solo valor 

    function getCartCount(){
        return cartState.products.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0) 
    }

//===================================================================== 
                         //getTotalPrice(helper)
//===================================================================== 

    function getTotalPrice(){
        return cartState.products.reduce((acumulador, valorActual) => acumulador + valorActual.total, 0)
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

