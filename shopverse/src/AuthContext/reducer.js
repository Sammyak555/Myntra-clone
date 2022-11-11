const reducer=(state,action)=>{
  
    switch(action.type){
      case "LOGIN_LOADING":{
        return{
        token: null,
        isAuth: false,
        isLoading:true,
        isError:false
        }
        }
  
        
      case "LOGIN_SUCCESS":{
      return{
      token: action.payload,
      isAuth: true,
      isLoading:false,
      isError:true
      }
      }
      case "LOGIN_FAILURE":{
        return{
        token: null,
        isAuth: false,
        isLoading:false,
        isError:true
        }
        }
        default:
          {
            return state
          }
    }
  
  
  }
  export default reducer;