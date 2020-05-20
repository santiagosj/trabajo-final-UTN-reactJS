import React, { useState, useContext } from 'react'
import NavItem from '../NevItem/NavItem'
import './Header.scss'
//import { useHistory } from "react-router-dom";
import {firebaseAuth} from '../../services/Context/FirebaseAuthProvider'
import {CartContext} from '../../services/Context/CartProvider'

const Header = ({
   classHeader,
   userName,
   loged
}) => {
   // const history = useHistory();
    const [active, setActive] = useState(false)
    
    const {handleSignOut} = useContext(firebaseAuth)

    const {cartCount} = useContext(CartContext)

    const handleLogout = () => {
        handleSignOut()
       // history.push("/login");
    }

    const navigationItems = {
        signedInLinks:[
            {link:'/products',name:'Home'},
            {link:'/cart',name:`Cart -> 🛒${cartCount}`},
        ],
        signedOutLinks:[
            {link:'/login',name:'Login'},
            {link:'/signup',name:'SignUp'}
        ]
    }
   
    const handleMenuToggle = () => setActive(!active)

  return(
     <header className={classHeader}>
         {loged && (
            <div className="header-conent">
                <ul>
                    {navigationItems.signedInLinks.map((item,i) => <NavItem key={i} data={item}/>)}
                </ul>

                <div className={`Nav`} onClick={handleMenuToggle}>
                    <span>{userName}</span>
                    <div className={`${active ? 'Nav-active' : 'Nav-inactive'}`}>
                        <button onClick={handleLogout} className="btn btn-2">logout</button>
                    </div>
                </div>   
             </div>
         )}
         {!loged && (
            <div className="header-conent">
                
                <ul>
                    {navigationItems.signedOutLinks.map(
                         (item,i) => <NavItem 
                                         key={i} 
                                         data={item}
                                      />
                    )}
                </ul>
           </div>
        )}

     </header>
  )
}


export default Header
