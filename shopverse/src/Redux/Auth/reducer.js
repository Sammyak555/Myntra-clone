import * as types from "./actionTypes"

const initState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,action)=>{
    const {type,payload}=action;

    switch(type){
        case types.GET_LOGIN_REQUEST:{
            return { ...state ,isLoading:true,token:"",isAuth:false }
        }
        case types.GET_LOGIN_SUCCESS:{
            return { ...state,isLoading:false, token:payload ,isAuth:true}
        }
        case types.GET_LOGIN_FAILURE:{
            return { ...state,isError:true }
        }
        case types.GET_LOGOUT:{
            return{ ...state, isError:false, token:"" }
        }

        default: return state
    }
}

