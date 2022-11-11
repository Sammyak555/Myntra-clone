export function loginLoading(data) {
    return( { type: "LOGIN_LOADING", payload: data }
        
    )
  }

  export function loginSuccess(data) {
      return( { type: "LOGIN_SUCCESS", payload: data }
          
      )
    }

    

    export function loginFailure(data) {
      return( { type: "LOGIN_FAILURE", payload: data }
          
      )
    }