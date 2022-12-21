import { compose, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {cartReducer} from './reducers/cartReducers';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const initialState = {
  cart:{
    cartItems: localStorage.getItem('cartItems')
    ?JSON.parse(localStorage.getItem('cartItems'))
    :[]
  }
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)),);
const store = configureStore({
  reducer: reducer,
  initialState: initialState,
  composeEnhancer: composeEnhancer(applyMiddleware(thunk)),
});

export default store;
