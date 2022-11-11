import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const CartContext=createContext();
const initstate=[];

const CartContextProvider = ({children}) => {
  const[state,dispatch]=useReducer(reducer,initstate)
  return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
