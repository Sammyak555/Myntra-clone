const reducer=(state2,action)=>{
  
    switch(action.type){
      case "ADD-TO-CART":{
        return[...state2,action.payload]
      }
      case "REMOVE_FROM_CART":{
        const cartafterremove=state2.filter((item)=>
        item.id!==action.payload)
        return cartafterremove
      }
      case "CHECKOUT":{
        return [];
      }
        default:
          {
            return state2
          }
    } 
}
export default reducer;