import * as actionTypes from "../constants/cartConstants";
import axios from "axios";




export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload:{
      _id: data._id,
      title: data.title,
      image: data.image,
      info: data.info,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    }
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};