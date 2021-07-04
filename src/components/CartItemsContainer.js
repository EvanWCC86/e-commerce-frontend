import React from 'react'
import CartItem from './CartItem';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {addToCart, removeFromCart} from "../redux/actions/cartActions"
const CartItemsContainer = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
      };
      const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
      };
  return (
    <div className="cartItems__container">
        

        {cartItems.length === 0 ? (
            <div>
            Your Cart Is Empty <Link className="go__back" to="/">Go Back</Link>
            </div>
        ) : (
            cartItems.map((item) => (
            <CartItem
                key={item._id}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
            />
            ))
        )}
    </div>
  )
}

export default CartItemsContainer
