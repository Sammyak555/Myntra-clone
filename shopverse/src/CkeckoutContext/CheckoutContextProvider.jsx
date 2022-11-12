import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const CheckoutContext=createContext();
const initstate=[];

const CheckoutContextProvider = ({children}) => {
  const[state2,dispatch2]=useReducer(reducer,initstate)
  return <CheckoutContext.Provider value={{state2,dispatch2}}>{children}</CheckoutContext.Provider>;
};

export default CheckoutContextProvider;
