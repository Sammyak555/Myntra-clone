
import { Box, Button, Checkbox, Flex, Grid, GridItem, Icon, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { dataforfilter, productdata } from "../Components/Api"
import {CartContext} from "../CartContext/CartContextProvider"
import { addtowish } from "../CartContext/action";
import  {AiOutlineHeart}  from 'react-icons/ai'

const itemalreadyexist=(id,cartitems)=>{
    if(cartitems.find((item)=>item.id===id)){
      return true
    }else{
      return false
    }
  }

 const Shirts=()=>{
const [data,setData]=useState([])
const{state,dispatch}=useContext(CartContext)
const[fildata,setFildata]=useState([])
const [data1,setData1]=useState("")


let fetchdata=(data1,srt,ord)=>{
    productdata({
        title:data1||null,
        style:"Shirt",
        sort:srt||null,
        order:ord||null
        
        
    })
    .then((res)=>setData(res.data))
}

useEffect(()=>{
     fetchdata();
     dataforfilter({
        title:data1||null,
        style:"Shirt",
        sort:null,
        order:null
       
    }
     )
     .then((res)=>setFildata(res.data))
},[])




function titlechange(elem){
    setData1([...data1,elem])
    fetchdata([...data1,elem])
    
}
let order;
function sorthtl(){
      fetchdata=(data1)=>{
        productdata({
            title:data1||null,
            style:"Shirt",
            sort:"discounted_price",
            order:"desc"
            
        })
        .then((res)=>setData(res.data))
    }
    fetchdata()
}

function sortlth(){
    fetchdata=(data1)=>{
        productdata({
            title:data1||null,
            style:"Shirt",
            sort:"discounted_price",
            order:"asc"
            
        })
        .then((res)=>setData(res.data))
    }
    fetchdata()
}
function sortpop(){
    fetchdata=(data1)=>{
        productdata({
            title:data1||null,
            style:"Shirt",
            sort:"rating_count",
            order:"desc"
            
        })
        .then((res)=>setData(res.data))
    }
    fetchdata()
}



    return(
        <div>
            <Grid
                templateAreas={`"leacher leacher leacher header"
                                "nav main main main "
                                "nav footer footer footer "`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'260px 1fr'}
                 h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
>
                <GridItem  area={'header'}  style={{ border:"1px solid grey",marginTop:"10px",marginRight:"80px"}} >
                   
                <Menu isLazy>
           {/* sort by:  */}
           <MenuButton><Box  width='260px' >Sort by :{order}</Box></MenuButton>
                <MenuList>
           <MenuItem onClick={()=>sorthtl()} value='htl'>High to low</MenuItem>
           <MenuItem onClick={()=>sortlth()} value='lth'>Low to high</MenuItem>
           <MenuItem onClick={()=>sortpop()} value="Pop">Popularity</MenuItem>
         </MenuList>
         </Menu>     
         
                    
                </GridItem>
                <GridItem pl='2'  area={'nav'}>
                    <Box  height={'300px'} overflow="scroll" >
                        Brand
                        <Stack spacing={[1, 5]} direction={['column']}>
                        {
                            fildata.map((el)=>
                            <Checkbox key={el.id} onChange={()=>titlechange(el.title)} value={el.title}>{el.title}</Checkbox>
                            )
                        }
                        </Stack>
                        
                        </Box>
                    <Box  height={'300px'}>Price</Box>
                    {/* <Box  height={'300px'}>Color</Box>
                    <Box  height={'300px'}>Discount Range</Box> */}
                </GridItem>
                <GridItem pl='2'  area={'main'}>
                <Grid templateColumns='repeat(4, 1fr)' style={{marginLeft:"40px"}} gap={'30px'} >
                {
                    data.map((item)=>
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
                        disabled={itemalreadyexist(item.id,state)}
                        onClick={()=>dispatch(addtowish(item))}
                        ><Icon as={AiOutlineHeart} w={6} h={6} />Wishlist</Button>
                    </div>)
                }
            </Grid>
                 
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
                </Grid>
            
            
        </div>
    )

}
export default Shirts
