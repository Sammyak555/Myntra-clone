import React, { useContext } from 'react'
import { Box, Button, Checkbox, Flex, Grid, GridItem, Icon, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import  {AiOutlineHeart}  from 'react-icons/ai'
import   './CompStyles/clothingcard.css'
import { addtowish } from '../CartContext/action'
import { CartContext } from '../CartContext/CartContextProvider'

const itemalreadyexist=(discounted_price,strike_price,cartitems)=>{
    if(cartitems.find((item)=>item.discounted_price===discounted_price&&item.strike_price===strike_price)){
      return true
    }else{
      return false
    }
  }

const Clothcard = (item) => {
    const{state,dispatch}=useContext(CartContext)
    // console.log(state)
  return (
    <div className='card'>
        <div key={item.id} style={{width:""}}>
                        <img src={item.images[0]} alt="" />
                        <div>
                        <h1 style={{color:"black"}}>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <div style={{display:"flex",fontWeight:"500"}}>
                        <p style={{color:"#0C0B0B"}}>Rs:{item.discounted_price}</p>
                        <p style={{marginLeft:"10px",fontWeight:"400",textDecoration:"line-through"}}>Rs:{item.strike_price}</p>
                        <p style={{marginLeft:"10px",fontWeight:"600",color:"green"}}>Rs:{item.discount}</p>
                        </div>
                        </div>
                        <Button
                        style={{width:"65%",borderRadius:"0"}}
                        colorScheme="grey"
                        variant="outline"
                        disabled={itemalreadyexist(item.discounted_price,item.strike_price,state)}
                        onClick={()=>dispatch(addtowish(item))}
                        ><Icon as={AiOutlineHeart} w={6} h={6} />Wishlist</Button>
                    </div>
    </div>
  )
}

export default Clothcard