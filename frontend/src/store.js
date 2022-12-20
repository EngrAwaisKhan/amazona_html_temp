import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)),);
const store = configureStore({
  reducer: reducer,
  initialState: initialState,
  composeEnhancer: composeEnhancer(applyMiddleware(thunk)),
});

export default store;
