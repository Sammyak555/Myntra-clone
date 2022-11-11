import { createContext,  useReducer } from "react"
import  reducer  from "./reducer"


export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {
  const initialState = {
    token: null,
    isAuth: false,
    isLoading:false,
    isError:false
  }
  

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;