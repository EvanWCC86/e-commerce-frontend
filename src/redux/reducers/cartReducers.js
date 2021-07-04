import * as actionTypes from '../constants/cartConstants';

const cart_initial_state = {
    cartItems:[],
    
  
}

export const cartReducer = (state=cart_initial_state, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
        const item = action.payload;

        const existItem = state.cartItems.find((x) => x._id === item._id);

        if (existItem) {
            return {
            ...state,
            cartItems: state.cartItems.map((x) =>
                x._id === existItem._id ? item : x
            ),
            };
        } else {
            return {
            ...state,
            cartItems: [...state.cartItems, item],
            };
        }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x._id !== action.payload),
            };
        
        default:
            return state;
    }
}