import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import {cartReducer} from "./reducers/cartReducers";


import {getProductsReducer, getProductDetailsReducer,getCategoryProductsReducer} from "./reducers/productReducers"


const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getCategoryProducts: getCategoryProductsReducer,
    getProductDetails:getProductDetailsReducer,

});

const middleware = [thunk]

// set up localstorage
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
// set up localstorage END

const store = createStore(
    reducer,
    // only for localstorage
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;



