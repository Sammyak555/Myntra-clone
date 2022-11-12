export const addtowish=(data)=>({
    type:"ADD-TO-CART",
    payload:data
})
export const removewish=(id)=>({
    type:"REMOVE_FROM_CART",
    payload:id
})
