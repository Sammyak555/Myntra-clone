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
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/11c16415-1196-4bac-a667-ed7286a00e0f1668143055672-OMG-Deals--1-.jpg" alt="" />
                <Grid templateColumns='repeat(8, 1fr)' gap={'0px'} >
                {
                    data.map((item)=>
                    <div key={item.id}>
                        <img src={item.url} alt="" />
                    </div>)
                }
                </Grid>
                
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/de3859bd-ed72-4d90-9a93-70dd191dd5a51668144694278-Brands-Everyone---s-Crushing-On-.jpg" alt="" />
                <Grid templateColumns='repeat(8, 1fr)' gap={'0px'} >
                {
                    data1.map((item)=>
                    <Link to={"/men"}><div  key={item.id}>
                    <img src={item.url} alt="" />
                </div></Link>)
                }
                </Grid>
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/49039744-a61e-4220-a40a-e791ce77844f1668142162387-Shop-By-Category--1-.jpg" alt="" />
                <Grid templateColumns='repeat(8, 1fr)' gap={'0px'} >
                {
                    data3.map((item)=>
                    <Link to={"/men"}><div  key={item.id}>
                    <img  src={item.url} alt="" />
                </div></Link>)
                }
                </Grid>
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/db79460f-8020-49e8-8528-189507bce7a21668143245506-Budget-Buys--2-.jpg" alt="" />
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