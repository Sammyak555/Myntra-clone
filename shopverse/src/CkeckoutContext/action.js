export const addtocart=(data)=>({
    type:"ADD-TO-CART",
    payload:data
})
export const removecart=(id)=>({
    type:"REMOVE_FROM_CART",
    payload:id
})
export const checkout=()=>({
    type:"CHECKOUT"
    
})