
import { Box, Checkbox, Flex, Grid, GridItem, Stack } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { productdata } from "../Components/Api"


 const Shirts=()=>{
const [data,setData]=useState([])
const [data1,setData1]=useState("")




useEffect(()=>{
    productdata({
        limit:200,
        title:data1||null
    })
    .then((res)=>setData(res.data))
},[])


let sh=[]
let x;
let str="Shirt"
let str1="Shirts"

for(let i=0;i<data.length;i++){
    if(data[i].subtitle!==null){
        x=((data[i].subtitle).split(" "))
        for(let j=0;j<x.length;j++){
            if(x[j]===str||x[j]===str1){
                sh.push(data[i])
            }
        }
    }
}

console.log(sh)


console.log(data1)

    return(
        <div>
            <Grid
                templateAreas={`"header header"
                                "nav main"
                                "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'260px 1fr'}
                 h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
>
                <GridItem pl='2' bg='orange.300' area={'header'} style={{border:"1px solid grey"}} >
                   
                    <Flex >
                        <Box bg={'grey'} >Sorting</Box>
                    </Flex>
                </GridItem>
                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    <Box bg='teal.300' height={'300px'}>
                        Brand
                        <Stack spacing={[1, 5]} direction={['column']}>
                        {
                            sh.map((el)=>
                            <Checkbox onChange={()=>setData1(el.title)} value={el.title}>{el.title}</Checkbox>
                            )
                        }
                        </Stack>
                        
                        </Box>
                    <Box bg='red.300'height={'300px'}>Price</Box>
                    <Box bg='blue.300' height={'300px'}>Color</Box>
                    <Box bg='orange.300' height={'300px'}>Discount Range</Box>
                </GridItem>
                <GridItem pl='2'  area={'main'}>
                <Grid templateColumns='repeat(5, 1fr)' gap={'0px'} >
                {
                    sh.map((item)=>
                    <div key={item.images[0]}>
                        <img src={item.images[0]} alt="" />
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
