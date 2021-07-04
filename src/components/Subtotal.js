import React from 'react'
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
const Subtotal = ({shoppingCart}) => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
      };
      const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };
  return (
    <div className="subtotal__container">
        <div className="subtotal__info">
            <p className="amount">you have  ({getCartCount()}) items</p>
            <div className="subtotal"><span>subtotal:</span> <span>${getCartSubTotal()}</span></div>
        </div>
        <div className="checkout">
            <button>Proceed To Checkout</button>
        </div>
        {shoppingCart && (
        <Link to="/cart" className="checkout">
            <button>view cart</button>
        </Link>
        )}
    </div>
  )
}

export default Subtotal
