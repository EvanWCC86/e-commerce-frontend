import React from 'react'
import CartItemsContainer from '../components/CartItemsContainer';
import Subtotal from '../components/Subtotal';
// import {useSelector, useDispatch} from "react-redux";
// import {Link} from "react-router-dom";


// components
// import CartItem from '../components/CartItem'
// actions
// import {addToCart, removeFromCart} from "../redux/actions/cartActions"
const ShopcartPage = () => {
    // const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart);
    // const {cartItems} = cart;

    // useEffect(() => {}, []);

    // const qtyChangeHandler = (id, qty) => {
    //     dispatch(addToCart(id, qty));
    //   };
    //   const removeFromCartHandler = (id) => {
    //     dispatch(removeFromCart(id));
    //   };
    //   const getCartCount = () => {
    //     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    //   };
    //   const getCartSubTotal = () => {
    //     return cartItems
    //       .reduce((price, item) => price + item.price * item.qty, 0)
    //       .toFixed(2);
    //   };
    return (
    
        <div className="cartPage">
            <div className="cartPage__container container">
                <CartItemsContainer />

                <Subtotal />
            </div>
        </div>
      
    )
}

export default ShopcartPage
