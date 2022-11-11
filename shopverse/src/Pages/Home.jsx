import { Grid } from "@chakra-ui/react"
import { useContext, useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getdata } from "../Components/Api"

export function Home(){
    const [data,setData]=useState([])
    const [data1,setData1]=useState([])
    const [data2,setData2]=useState([])
    const [data3,setData3]=useState([])
    const [data4,setData4]=useState([])
    

    useEffect(()=>{
        getdata({
            title: "dealsofthday",
            limit:8
        }).then((res)=>setData(res.data))
        getdata({
                     title: "bestOfMyntra",
                     limit:16
        }).then((res)=>setData1(res.data))
        getdata({
                    title: "topPicks",
                    limit:16
        }).then((res)=>setData2(res.data))
        getdata({
                    title: "categoriesToBag",
                    limit:16
        }).then((res)=>setData3(res.data))
        getdata({
            title: "GiftingCards",
            limit:4
        }).then((res)=>setData4(res.data))
    },[])
    
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
                <h1>CATEGORIES TO BAG</h1>
                <Grid templateColumns='repeat(8, 1fr)' gap={'0px'} >
                {
                    data3.map((item)=>
                    <Link to={"/men"}><div  key={item.id}>
                    <img  src={item.url} alt="" />
                </div></Link>)
                }
                </Grid>
                <h1>Top Picks</h1>
                <Grid templateColumns='repeat(7, 1fr)' gap={'0px'} >
                {
                    data2.map((item)=>
                    <Link to={"/men"}><div  key={item.id}>
                    <img  src={item.url} alt="" />
                </div></Link>)
                }
                </Grid>
                <h1>GIFTING CARDS</h1>
                <Grid templateColumns='repeat(4, 1fr)' gap={'0px'} >
                {
                    data4.map((item)=>
                    <Link to={"/men"}><div  key={item.id}>
                    <img  src={item.url} alt="" />
                </div></Link>)
                }
                </Grid>
                       
        </div>
    )

}