import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const PrivateRoute = ({children}) => {
    const {state}=useContext(AuthContext)
    if(!state.isAuth){
        alert("Please Login First!")
      return(<Navigate to="/login" />)
    }else{
      return children;
    }
    
  };
  
  export default PrivateRoute;