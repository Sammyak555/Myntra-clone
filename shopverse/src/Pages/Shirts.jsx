
import { Box, Checkbox, Flex, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Stack } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { dataforfilter, productdata } from "../Components/Api"
import {CartContext} from "../CartContext/CartContextProvider"


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

console.log(data)

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
                <GridItem bg='orange.300' area={'header'} justifyContent="center" style={{border:"1px solid grey"}} >
                   
                <Menu isLazy>
            <MenuButton>sort by: </MenuButton>
                <MenuList>
           <MenuItem onClick={()=>sorthtl()} value='htl'>High to low</MenuItem>
           <MenuItem onClick={()=>sortlth()} value='lth'>Low to high</MenuItem>
           <MenuItem onClick={()=>sortpop()} value="Pop">Popularity</MenuItem>
         </MenuList>
         </Menu>     
                        <Box bg={'grey'} width='260px' >Sort by :{order}</Box>
                    
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    <Box bg='teal.300' height={'300px'} overflow="scroll" >
                        Brand
                        <Stack spacing={[1, 5]} direction={['column']}>
                        {
                            fildata.map((el)=>
                            <Checkbox onChange={()=>titlechange(el.title)} value={el.title}>{el.title}</Checkbox>
                            )
                        }
                        </Stack>
                        
                        </Box>
                    <Box bg='red.300'height={'300px'}>Price</Box>
                    <Box bg='blue.300' height={'300px'}>Color</Box>
                    <Box bg='orange.300' height={'300px'}>Discount Range</Box>
                </GridItem>
                <GridItem pl='2'  area={'main'}>
                <Grid templateColumns='repeat(5, 1fr)' style={{marginLeft:"40px"}} gap={'30px'} >
                {
                    data.map((item)=>
                    <div key={item.images[0]}>
                        <img src={item.images[0]} alt="" />
                        <div>
                        <h1>{item.title}</h1>
                        <p>{item.subtitle}</p>
                        <p>Rs:{item.discounted_price}</p>
                        </div>
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
