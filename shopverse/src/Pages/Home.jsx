import { Grid } from "@chakra-ui/react"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getdata } from "../Components/Api"

export function Home(){
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])

    useEffect(()=>{
        getdata({
            title: "dealsofthday",
            limit:8
        }).then((res)=>setData(res.data))
        getdata({
                     title: "bestOfMyntra",
                     limit:16
                 }).then((res)=>setData1(res.data))
    },[])
    // useEffect(()=>{
    //     getdata({
    //         title: "bestOfMyntra",
    //         limit:8
    //     }).then((res)=>setData(res.data))
    // },[])
    console.log(data1)
    return(
        <div>
            <h1>DEAL OF THE DAY</h1>
                <Grid templateColumns='repeat(8, 1fr)' gap={'0px'} >
                {
                    data.map((item)=>
                    <div key={item.id}>
                        <img src={item.url} alt="" />
                    </div>)
                }
                </Grid>
                <h1>Best of Myntra</h1>
                <Grid templateColumns='repeat(8, 1fr)' gap={'0px'} >
                {
                    data1.map((item)=>
                    <Link to={"/men"}><div  key={item.id}>
                    <img src={item.url} alt="" />
                </div></Link>)
                }
                </Grid>
            
        </div>
    )

}