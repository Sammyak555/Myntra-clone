import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
  } from "redux";

import thunk from 'redux-thunk';
import {reducer as authReducer} from './Auth/reducer'
// import {cartReducer} from "../Redux/cart/reducer"
// import productsReducer from './products/reducer';
// import checkoutReducer from './Checkout/reducer';

const rootReducer = combineReducers({
    auth : authReducer
    // cart: cartReducer,
    // checkout: checkoutReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  (applyMiddleware(thunk))
);
