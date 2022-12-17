import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const loggedData=useSelector((store)=>store.auth)
    if(!loggedData.isAuth){
        alert("Please Login First!")
      return(<Navigate to="/login" />)
    }else{
      return children;
    }
    
  };
  
  export default PrivateRoute;