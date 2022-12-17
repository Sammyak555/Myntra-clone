import axios from "axios"
import * as types from "./actionTypes"

export  const getloginreq=()=>{
    return { type:types.GET_LOGIN_REQUEST }
}

export const getloginsucc=(payload)=>{
    return { type:types.GET_LOGIN_SUCCESS,payload }
}
export const getloginfail=()=>{
    return { type:types.GET_LOGIN_FAILURE }
}
export const getlogout =()=>{
    return { type:types.GET_LOGOUT }
}

export const getLogin=(data)=>(dispatch)=>{
    dispatch(getloginreq())
    if(data){
        const payload={
        email:data.email,
        password:data.password
        }

        return axios.post(`https://reqres.in/api/login`,payload)
        .then((r)=>{
            dispatch(getloginsucc(r.data))
        })
        .catch((e)=>{
            dispatch(getloginfail())
        })
    }
}