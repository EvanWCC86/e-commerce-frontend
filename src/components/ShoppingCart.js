import React from 'react'
import { IoMdClose} from 'react-icons/io';

import CartItemsContainer from './CartItemsContainer';
import Subtotal from './Subtotal';

const ShoppingCart = ({showCart, toggleCart}) => {

    
   
  return (
    <aside className={`shoppingCart ${showCart ? "showShoppingCart" : ""}`}>
        
        <div className="shoppingCart__header">
            <h2>Shopping Cart</h2>
            <button onClick={toggleCart}><IoMdClose /></button>
        </div>
        
        <div className="shoppingCart_main container">
            <CartItemsContainer />
        </div>  
        <div className="shoppingCart__footer">
            <Subtotal shoppingCart />   
        </div>  
            
            
        

    </aside>
  )
}

export default ShoppingCart
