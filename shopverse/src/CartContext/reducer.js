const reducer=(state,action)=>{
  
    switch(action.type){
      case "ADD-TO-CART":{
        return[...state,action.payload]
      }
      case "REMOVE_FROM_CART":{
        const cartafterremove=state.filter((item)=>
        item.id!==action.payload)
        return cartafterremove
      }
      case "CHECKOUT":{
        return [];
      }
        default:
          {
            return state
          }
    } 
}
export default reducer;