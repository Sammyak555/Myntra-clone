
import { Grid } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import { productdata } from "../Components/Api"


 const Shirts=()=>{
const [data,setData]=useState([])
const [data1,setData1]=useState([])


useEffect(()=>{
    productdata()
    .then((res)=>setData(res.data))
},[])
console.log(data)

let sh=[]
let x;
let str="Shirt"
for(let i=0;i<data.length;i++){
    if(data[i].subtitle!==null){
        x=((data[i].subtitle).split(" "))
        for(let j=0;j<x.length;j++){
            if(x[j]===str){
                sh.push(data[i])
            }
        }
    }
}
console.log(sh)





    return(
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={'0px'} >
            {
                sh.map((item)=>
                <div key={item.images[0]}>
                    <img src={item.images[0]} alt="" />
                </div>)
            }
            </Grid>
            
        </div>
    )

}
export default Shirts
